import React from 'react';

interface BlogListItemProps {
  title?: string | null;
  content?: string | null;
}

export function BlogListItem({ title, content }: BlogListItemProps) {
  return (
    <div>
      <h3 className="text-lg text-green-500">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default BlogListItem;
