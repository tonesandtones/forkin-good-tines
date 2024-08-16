import { BlogItemDetail } from '@sharknado/shared-ui';
import styles from './page.module.css';

export default function BlogDetail({ params }: { params: { id: string } }) {
  return (
    <div className={'container'}>
      <BlogItemDetail id={params.id} />
    </div>
  );
}
