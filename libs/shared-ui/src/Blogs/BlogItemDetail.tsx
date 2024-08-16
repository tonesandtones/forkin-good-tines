import {
  BlogPostDetailDocument,
  BlogPostDetailQuery,
  BlogPostDetailQueryVariables,
  getClient,
} from '@sharknado/cms-api';
import styles from './BlogItemDetail.module.css';
import { DocumentNode } from 'graphql';

interface BlogItemDetailProps {
  id?: string | null;
}

export async function BlogItemDetail({ id }: BlogItemDetailProps) {
  const { data } = await getClient().query<
    BlogPostDetailQuery,
    BlogPostDetailQueryVariables
  >({
    query: BlogPostDetailDocument as DocumentNode,
    variables: {
      id: id,
    },
  });

  return (
    <div className={'container prose'}>
      <a href="/blog">Back to Blog</a>
      <h1 className="my-8">{data.blogpost?.data?.attributes?.title}</h1>
      <p>{data.blogpost?.data?.attributes?.description}</p>
    </div>
  );
}

export default BlogItemDetail;
