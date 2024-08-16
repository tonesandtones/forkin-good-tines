import Link from 'next/link';
import React from 'react';

interface BlogListItemProps {
  title?: string | null;
  content?: string | null;
  id?: string | null;
}

export function BlogListItem({ title, content, id }: BlogListItemProps) {
  return (
    <Link href={`/blog/${id}`}>
      <div className="prose">
        <h3 className="text-lg my-4">{title}</h3>
        <p className="text-md">{content}</p>
      </div>
    </Link>
  );
}

export default BlogListItem;
