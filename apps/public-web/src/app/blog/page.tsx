import { BlogList, BlogListItem } from '@sharknado/components';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="wrapper">
      <div className="container mx-auto">
        <BlogList />
      </div>
    </div>
  );
}
