import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: ['http://localhost:1337/graphql'],
  documents: ['./apps/**/*.graphql'],
  overwrite: true,
  generates: {
    './libs/cms-api/src/generated/types.ts': {
      // config: {
      //   scalars: { Date: Date, DateTime: Date, Object: Object },
      //   withHooks: true,
      // },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        // 'typed-document-node',
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
