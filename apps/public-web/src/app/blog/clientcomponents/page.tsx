'use client';
import { BlogpostEntity, useBlogpostsSuspenseQuery } from '@sharknado/cms-api';
import { BlogList } from '@sharknado/shared-ui';

export default function Index({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const { data } = useBlogpostsSuspenseQuery({
    variables: {
      page: 1,
      pageSize: 20,
      sort: 'publishedAt',
    },
  });

  return (
    <div className="wrapper">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold my-8">
          All Blogs - using Client components
        </h2>
        <BlogList
          data={data.blogposts?.data as BlogpostEntity[]}
          detailPath={'/blog/clientcomponents'}
        />
      </div>
    </div>
  );
}
