import { BlogItemDetail } from '@sharknado/components';
import styles from './page.module.css';

export default function BlogDetail({ params }: { params: { id: string } }) {
  return (
    <div className={'container'}>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      <BlogItemDetail id={params.id} />
    </div>
  );
}
