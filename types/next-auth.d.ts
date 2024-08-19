import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface Profile {
    /** The user's postal address. */
    address?: string;
    'cognito:groups': string[];
    picture?: string;
    given_name?: string;
    family_name?: string;
    phone_number?: string;
    'custom:job_title'?: string;
  }

  interface Session {
    user: {
      /** The user's postal address. */
      address?: string;
      'cognito:groups': string[];
      given_name?: string;
      family_name?: string;
      phone_number?: string;
      roles?: string[];
      job_title?: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
    given_name?: string;
    family_name?: string;
    picture?: string;
    phone?: string;
    role?: string[];
    'custom:job_title'?: string;
  }
}
