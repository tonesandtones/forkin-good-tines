import {
  BlogpostsDocument,
  BlogpostsQuery,
  BlogpostsQueryVariables,
  ComponentContentBlogListing,
  Enum_Componentcontentbloglisting_View,
  getClient,
} from '@sharknado/cms-api';
import { DocumentNode } from 'graphql';
import BlogListItem from './BlogListItem';
import { Button } from '../button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../card';
import BlogListPagination from './BlogListPagination';

type BlogListProps = {
  searchParams: URLSearchParams;
} & ComponentContentBlogListing;

export async function BlogList({
  searchParams,
  items_per_page,
  number_of_cols,
  view,
}: BlogListProps) {
  const page = searchParams.get('page')
    ? parseInt(searchParams.get('page') as string)
    : 1;

  const pageSize = searchParams.get('pageSize')
    ? parseInt(searchParams.get('pageSize') as string)
    : items_per_page;

  const { data } = await getClient().query<
    BlogpostsQuery,
    BlogpostsQueryVariables
  >({
    query: BlogpostsDocument as DocumentNode,
    variables: { page: page, pageSize: pageSize, sort: 'publishedAt' },
  });

  const isGridView =
    view === Enum_Componentcontentbloglisting_View.Grid ? true : false;

  // console.log(data);

  return (
    <div>
      <h2 className="text-4xl my-8">Welcome to BlogList!</h2>
      {/* {JSON.stringify(searchParams, null, 2)} */}

      {/* cretae a grid of 3 items that collapse to 1 item on mobile */}
      <div
        className={
          isGridView
            ? `grid grid-cols-1 gap-4 md:grid-cols-${number_of_cols}`
            : ''
        }
      >
        {data.blogposts?.data.map((post) => (
          <BlogListItem
            layout={isGridView ? 'grid' : 'list'}
            key={post.id}
            title={post.attributes?.title}
            content={post.attributes?.description}
            id={post.id}
          />
        ))}
      </div>
      <div className="my-8">
        <BlogListPagination
          defaultPageSize={pageSize ?? 10}
          pageCount={data.blogposts?.meta.pagination.pageCount ?? 1}
          total={data.blogposts?.meta.pagination.total ?? 1}
        />
      </div>

      {/* <ul>
        {data.blogposts?.data.map((blog) => (
          <BlogListItem
            key={blog.id}
            id={blog.id}
            title={blog.attributes?.title}
            content={blog.attributes?.description}
          />
        ))}
      </ul> */}
    </div>
  );
}

export default BlogList;
