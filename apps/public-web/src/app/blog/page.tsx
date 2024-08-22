import { ContentPageHero } from '@sharknado/shared-ui';
import { DynamicPageContent } from '../../ComponentFactory/DynamicPageContent';

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
        <h1 className="text-4xl font-bold">Welcome to public-web!</h1>
        {/* <ContentPageHero id={'1'} title={'fooo'} /> */}
        <DynamicPageContent pageId={'1'} />
        {/* <BlogList /> */}
      </div>
    </div>
  );
}
