import {
  BlogpostsDocument,
  BlogpostsQuery,
  BlogpostsQueryVariables,
  getClient,
} from '@sharknado/cms-api';
import { DocumentNode } from 'graphql';
import BlogListItem from './BlogListItem';

export async function BlogList() {
  const { data } = await getClient().query<
    BlogpostsQuery,
    BlogpostsQueryVariables
  >({
    query: BlogpostsDocument as DocumentNode,
  });

  // console.log(data);

  return (
    <div className="bg-slate-600 h-screen w-full flex items-center justify-center">
      <h2 className="text-red-500">Welcome to BlogList!</h2>
      <ul>
        {data.blogposts?.data.map((blog) => (
          <BlogListItem
            key={blog.id}
            title={blog.attributes?.title}
            content={blog.attributes?.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
