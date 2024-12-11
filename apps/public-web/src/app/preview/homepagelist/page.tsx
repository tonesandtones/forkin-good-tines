import { getClient } from '../../../CMSClient/client';
import {
  NewspostEntity,
  NewspostsHeadlinesDocument,
  NewspostsHeadlinesQuery,
  NewspostsHeadlinesQueryVariables,
} from '@sharknado/cms-api';
import { NewspostHomepageList } from '../../../../../../libs/shared-ui/src/Newsposts/NewspostHomepageList/NewspostHomepageList';

export default async function Index() {
  const { data } = await getClient().query<
    NewspostsHeadlinesQuery,
    NewspostsHeadlinesQueryVariables
  >({
    query: NewspostsHeadlinesDocument,
    variables: {
      page: 1,
      pageSize: 4,
      sort: 'publishedAt:desc',
    },
  });

  return (
    <div>
      <div className="flex items-baseline">
        <h1 className="flex-none">Latest News and Alerts</h1>
        <div className="flex-grow"></div>
        <a href="/preview/news"
           className="flex-none py-1.5 px-3 font-semibold border-2 border-teal-950 rounded-lg text-teal-950 hover:text-teal-700 hover:border-teal-700"
        >See all</a>
      </div>

      <NewspostHomepageList
        data={data.newsposts?.data as NewspostEntity[]}
        detailPath={'/preview/homepagelist'}
      />
    </div>
  );
}
