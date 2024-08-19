import { getServerSession } from 'next-auth/next';

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (session) {
    return <>{children}</>;
  } else {
    return <p>Access Denied</p>;
  }
}
