// @/pages/api/[...nextauth].js

import { profile } from 'console';
import NextAuth, { AuthOptions } from 'next-auth';
import CognitoProvider from 'next-auth/providers/cognito';

const authOptions: AuthOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID ?? '',
      clientSecret: process.env.COGNITO_CLIENT_SECRET ?? '',
      // scope: 'openid profile email phone',
      checks: ['none'],
      profile(profile, tokens) {
        console.log('----------profile----------');
        console.log(profile);
        // return profile;
        return {
          id: profile.sub,
          given_name: profile.given_name,
          family_name: profile.family_name,
          phone: profile.phone_number,
          'custom:job_title': profile['custom:job_title'],
          'cognito:username': profile['cognito:username'],
          ...profile,
          ...tokens,
        };
      },

      issuer:
        'https://cognito-idp.' +
        process.env.COGNITO_REGION +
        '.amazonaws.com/' +
        process.env.COGNITO_USER_POOL_ID,
    }),
  ],

  // jwt: { secret: "Y4WjNGWQi2TEb4wNbvgAig==" },
  secret: 'ZjGu7LXF7i6MVGfV/74cAmUp+1JXDyLto4mEJlCWI4w=',

  // set all cookies to be same site lax

  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      console.log('JWT CALLED');

      const isSignIn = user ? true : false;
      if (isSignIn) {
        console.log('--------1--------');
        console.log(token);

        //use the token to authenticate back again strapi
        const response = await fetch(
          `http://localhost:1337/api/auth/cognito/callback?access_token=${account?.access_token}&id_token=${account?.id_token}`
        ).catch((error) => {
          console.error('---ERROR---');
          console.error(error);
          return error;
        });

        const data = await response.json();
        console.log('--------2--------');
        console.log(data);
        token.jwt = data.jwt;
        token.id = data.user.id;
      }

      if (account && profile) {
        console.log('Account exists');
        console.log(profile);
        //       // modify token
        token.given_name = profile?.given_name;
        token.family_name = profile.family_name;
        token.picture = profile.picture;
        token.phone = profile.phone_number;
        token.role = profile['cognito:groups'];
        token['custom:job_title'] = profile['custom:job_title'];
      }

      return Promise.resolve(token);
    },

    session: async ({ session, user, token }) => {
      console.log('SESSION CALLED');
      if (session.user) {
        // modify session
        session.user.given_name = token.given_name;
        session.user.family_name = token.family_name;
        // session.user.picture = token.picture;
        session.user.phone_number = token.phone;
        session.user.roles = token.role;
        session.user.job_title = token['custom:job_title'];
      }
      return Promise.resolve({
        ...session,
        // jwt: user.jwt,
        // id: user.id,
      });
    },
    // redirect({ url, baseUrl }) {
    //   console.log("REDIRECT CALLED");
    //   console.log(url);
    //   console.log(baseUrl);

    //   return baseUrl;
    // },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
