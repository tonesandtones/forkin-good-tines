import { BlogList, BlogListItem } from '@sharknado/components';
import Link from 'next/link';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="wrapper">
      <div className="container mx-auto prose">
        <h2 className="my-8">List of Examples</h2>

        <div>
          <Link className="text-xl" href="/blog">
            Blogs Example
          </Link>
          <p>Simple master detail demo using dynaimc routes.</p>
        </div>
      </div>
    </div>
  );
}
