import {
  BlogList,
  ComponentFactory,
  ComponentRegistry,
  ContentPageHero,
  DynamicPageContent,
} from '@sharknado/shared-ui';

export default function Index({
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
        <DynamicPageContent pageId={'1'} searchParams={searchParams} />
        {/* <BlogList /> */}
      </div>
    </div>
  );
}
