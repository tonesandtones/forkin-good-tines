'use client';

import { useBlogPostDetailSuspenseQuery } from '@sharknado/cms-api';
import { BlogItemDetail } from '@sharknado/shared-ui';

export default function BlogDetail({ params }: { params: { id: string } }) {
  const { data } = useBlogPostDetailSuspenseQuery({
    variables: {
      id: params.id,
    },
  });

  return (
    <div className={'container'}>
      <div className={'container prose'}>
        <a href="/blog/clientcomponents/">Back to Blog</a>
      </div>

      <BlogItemDetail
        title={data.blogpost?.data?.attributes?.title}
        description={data.blogpost?.data?.attributes?.description}
        author={data.blogpost?.data?.attributes?.author}
        body={data.blogpost?.data?.attributes?.body}
      />
    </div>
  );
}
