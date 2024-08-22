interface BlogItemDetailProps {
  title?: string | null;
  description?: string | null;
}

export function BlogItemDetail({ title, description }: BlogItemDetailProps) {
  return (
    <div className={'container prose'}>
      <h1 className="my-8">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
