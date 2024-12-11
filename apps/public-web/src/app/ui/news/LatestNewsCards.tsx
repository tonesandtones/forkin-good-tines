import { getClient } from '../../../CMSClient/client';
import {
  NewspostEntity,
  NewspostsHeadlinesDocument,
  NewspostsHeadlinesQuery,
  NewspostsHeadlinesQueryVariables,
} from '@sharknado/cms-api';
import { NewspostCardList } from '@sharknado/shared-ui';

export default async function LatestNewsCards() {
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
      <div className="flex items-baseline pb-2">
        <h1 className="flex-none ps-2 font-semibold text-lg text-teal-950">Latest News and Alerts</h1>
        <div className="flex-grow"></div>
        <a href="/preview/news"
           className="flex-none py-1 px-2 font-semibold border-2 border-teal-950 rounded-lg text-teal-950 hover:text-teal-700 hover:border-teal-700"
        >See all</a>
      </div>

      <NewspostCardList
        data={data.newsposts?.data as NewspostEntity[]}
        detailPath={'/preview/homepagelist'}
      />
    </div>
  );
}
