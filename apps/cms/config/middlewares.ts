export default [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'frame-src': [
            'http://localhost:*',
            'self',
            'sandbox.embed.apollographql.com',
          ],
        },
      },
    },
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
