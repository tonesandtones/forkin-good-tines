import styles from './page.module.css';
import {
  CreateBlogpostDocument,
  CreateBlogpostMutation,
  CreateBlogpostMutationVariables,
} from '@sharknado/cms-api';
import data from './data.json';

import { getClient } from '../../../CMSClient/client';

export default async function SeedData() {
  const client = await getClient();

  for (const blog of data) {
    await client.mutate<
      CreateBlogpostMutation,
      CreateBlogpostMutationVariables
    >({
      mutation: CreateBlogpostDocument,
      variables: {
        title: blog.title,
        description: blog.description,
        author:blog.author,
        body:blog.body,
      },
    });
  }

  return (
    <div className={styles['container']}>
      <h1>Welcome to SeedData!</h1>
    </div>
  );
}
