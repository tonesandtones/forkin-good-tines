import Link from 'next/link';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="wrapper pt-16">
      <div className="container mx-auto prose">
        <h1>Welcome to Sharknado Showdown</h1>
        <h2 className="my-8">List of Examples</h2>

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
