import Link from 'next/link';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../card';
import { Button } from '../button';

interface BlogListItemProps {
  title?: string | null;
  content?: string | null;
  id?: string | null;
}

export function BlogListItem({ title, content, id }: BlogListItemProps) {
  return (
    <Card className={'my-8'}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">
          <Link href={`/blog/${id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BlogListItem;
