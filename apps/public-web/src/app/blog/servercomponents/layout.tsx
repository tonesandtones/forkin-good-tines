export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="wrapper pt-16">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
