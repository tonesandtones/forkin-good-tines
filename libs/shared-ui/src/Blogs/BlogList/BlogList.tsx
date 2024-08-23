import { BlogpostEntity } from '@sharknado/cms-api';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../card';

interface BlogListProps {
  data: BlogpostEntity[];
  detailPath: string;
}

const BlogList = ({ data, detailPath }: BlogListProps) => {
  return (
    <div className={'my-4'}>
      {data.map((post, idx) => (
        <Card className={'my-4'} key={`post-${idx}`}>
          <CardHeader>
            <CardTitle>
              <Link href={`${detailPath}/${post.id}`}>
                {post.attributes?.title}
              </Link>
            </CardTitle>
            <CardDescription>{post.attributes?.author}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{post.attributes?.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { BlogList };
