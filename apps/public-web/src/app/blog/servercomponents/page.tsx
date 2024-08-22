import {
  BlogpostEntity,
  BlogpostsDocument,
  BlogpostsQuery,
  BlogpostsQueryVariables,
} from '@sharknado/cms-api';
import { BlogList } from '@sharknado/shared-ui';
import { getClient } from '../../../CMSClient/client';

export default async function Index({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */

  const { data } = await getClient().query<
    BlogpostsQuery,
    BlogpostsQueryVariables
  >({
    query: BlogpostsDocument,
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
          All Blogs - using Server components
        </h2>
        <BlogList
          data={data.blogposts?.data as BlogpostEntity[]}
          detailPath={'/blog/servercomponents'}
        />
      </div>
    </div>
  );
}
