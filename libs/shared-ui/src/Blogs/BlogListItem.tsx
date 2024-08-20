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
  layout: 'grid' | 'list';
  title?: string | null;
  content?: string | null;
  id?: string | null;
}

export function BlogListItem({
  layout,
  title,
  content,
  id,
}: BlogListItemProps) {
  if (layout === 'grid') {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="border-b-2  py-8">
      <div className="prose">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default BlogListItem;
