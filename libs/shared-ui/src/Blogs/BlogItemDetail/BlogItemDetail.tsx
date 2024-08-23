import Markdown from 'react-markdown';

interface BlogItemDetailProps {
  title?: string | null;
  description?: string | null;
  author?: string | null;
  body?: string | null;
}

export function BlogItemDetail({
  title,
  description,
  author,
  body,
}: BlogItemDetailProps) {
  return (
    <div className={'container prose'}>
      <h1 className="mt-8">{title}</h1>
      <p className="text-sm text-gray-500">{author}</p>
      <p className="font-bold">{description}</p>
      <Markdown>{body}</Markdown>
    </div>
  );
}
