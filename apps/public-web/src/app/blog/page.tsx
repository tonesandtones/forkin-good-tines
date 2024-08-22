import Link from 'next/link';

export default async function Index({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */

  return (
    <div className="wrapper">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold my-8">All Blogs</h2>

        <div>
          <Link className="text-xl" href="/blog/servercomponents">
            Blogs Example (Server Components)
          </Link>
          <p>
            Simple master detail demo using dynaimc routes and server
            components.
          </p>
        </div>

        <div>
          <Link className="text-xl" href="/blog/clientcomponents">
            Blogs Example (Client Components)
          </Link>
          <p>
            Simple master detail demo using dynaimc routes and client
            components.
          </p>
        </div>
      </div>
    </div>
  );
}
