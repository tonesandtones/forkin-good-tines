import {
  BlogPostDetailDocument,
  BlogPostDetailQuery,
  BlogPostDetailQueryVariables,
} from '@sharknado/cms-api';
import { BlogItemDetail } from '@sharknado/shared-ui';
import { getClient } from '../../../../CMSClient/client';
import { DocumentNode } from 'graphql';

export default async function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await getClient().query<
    BlogPostDetailQuery,
    BlogPostDetailQueryVariables
  >({
    query: BlogPostDetailDocument as DocumentNode,
    variables: {
      id: params.id,
    },
  });

  return (
    <div className={'container'}>
      <div className={'container prose'}>
        <a href="/blog/servercomponents/">Back to Blog</a>
      </div>

      <BlogItemDetail
        title={data.blogpost?.data?.attributes?.title}
        description={data.blogpost?.data?.attributes?.description}
      />
    </div>
  );
}
