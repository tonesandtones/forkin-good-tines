import {
  getClient,
  PageDocument,
  PageQuery,
  PageQueryVariables,
} from '@sharknado/cms-api';
import styles from './DynamicPageContent.module.css';
import { DocumentNode } from 'graphql';
import { ComponentFactory } from '../Factory/ComponentFactory';
import { ComponentRegistry } from '../Factory/ComponentRegistry';
import { ContentPageHero } from './ContentPageHero';
import CallToAction from '../CallToAction/CallToAction';
import BlogList from '../Blogs/BlogList';

ComponentRegistry.registerComponent(
  'ComponentContentPageHero',
  ContentPageHero
);

ComponentRegistry.registerComponent(
  'ComponentContentCallToAction',
  CallToAction
);

ComponentRegistry.registerComponent('ComponentContentBlogListing', BlogList);

interface DynamicPageContentProps {
  pageId: string;
  searchParams: URLSearchParams;
}

export async function DynamicPageContent({
  pageId,
  searchParams,
}: DynamicPageContentProps) {
  const { data } = await getClient().query<PageQuery, PageQueryVariables>({
    query: PageDocument as DocumentNode,
    variables: { id: pageId },
  });

  return (
    <div className={styles['container']}>
      <h1>Welcome to DynamicPageContent!</h1>
      {data.page?.data.attributes.body.map((comp, idx) => {
        return (
          <div>
            <ComponentFactory
              searchParams={searchParams}
              key={`cmp${idx}`}
              name={comp.__typename}
              props={comp}
            />
          </div>
        );
      })}
    </div>
  );
}

export default DynamicPageContent;
