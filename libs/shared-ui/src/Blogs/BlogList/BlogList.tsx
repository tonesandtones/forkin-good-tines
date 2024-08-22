'use client';
import {
  ComponentContentBlogListing,
  Enum_Componentcontentbloglisting_View,
  ResponseCollectionMeta,
  useBlogpostsSuspenseQuery,
} from '@sharknado/cms-api';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import SearchResultsToolbar from '../../SearchResultsToolbar/SearchResultsToolbar';
import BlogListItem from '../BlogListItem';
import React from 'react';
import BlogListPagination from '../BlogListPagination';
import { useSearchParams } from 'next/navigation';

const BlogList = ({
  items_per_page,
  number_of_cols,
  view,
}: ComponentContentBlogListing) => {
  const [searchMeta, setSearchMeta] = useState<
    ResponseCollectionMeta | null | undefined
  >(null);

  const [isGridView, setIsGridView] = useState<boolean>(
    view === Enum_Componentcontentbloglisting_View.Grid ? true : false
  );

  return (
    <div>
      {/* {JSON.stringify(searchMeta, null, 2)} */}
      <SearchResultsToolbar
        searchMeta={searchMeta}
        updateMeta={setSearchMeta}
        isGridView={isGridView}
        updateView={setIsGridView}
      />

      <BlogListList
        columns={number_of_cols ?? 3}
        view={Enum_Componentcontentbloglisting_View.List}
        searchMeta={searchMeta}
        updateMeta={setSearchMeta}
        isGridView={isGridView}
      />
    </div>
  );
};

interface BlogListListProps {
  columns: number;
  view: Enum_Componentcontentbloglisting_View;
  searchMeta: ResponseCollectionMeta | null | undefined;
  updateMeta: Dispatch<
    SetStateAction<ResponseCollectionMeta | null | undefined>
  >;
  isGridView: boolean;
}

const BlogListList = ({
  columns,
  view,
  searchMeta,
  updateMeta,
  isGridView,
}: BlogListListProps) => {
  const searchParams = useSearchParams();
  // const headersList = headers();

  useEffect(() => {
    const queryPage = searchParams.get('page');
    const queryPageSize = parseInt('pageSize');

    if (queryPage && queryPageSize) {
      const newSearchMeta = JSON.parse(JSON.stringify(searchMeta));
      newSearchMeta.pagination.page = parseInt(queryPage);
      newSearchMeta.pagination.pageSize = queryPageSize;

      updateMeta(newSearchMeta);
    }
  }, []);

  // const [page, setPage] = useState(1);
  // const [pageSize, setPageSize] = useState(10);

  // const [listData, setListData] = useState<BlogpostsQuery | null>();
  // const defereredListData = useDeferredValue(listData);

  // useEffect(() => {
  //   setPage(parseInt(searchParams.get('page') ?? '1'));
  //   setPageSize(parseInt(searchParams.get('pageSize') ?? '10'));

  //   // return () => {
  //   //   second
  //   // }
  // }, [searchParams]);

  const { data } = useBlogpostsSuspenseQuery({
    variables: {
      page: searchMeta?.pagination.page ?? 1,
      pageSize: searchMeta?.pagination.pageSize ?? 10,
      sort: 'publishedAt',
    },
  });

  useEffect(() => {
    if (data.blogposts?.meta) {
      updateMeta(data?.blogposts?.meta);

      const newurl =
        window.location.protocol +
        '//' +
        window.location.host +
        window.location.pathname +
        '?page=' +
        data.blogposts.meta.pagination.page +
        '&pageSize=' +
        data.blogposts.meta.pagination.pageSize;
      window.history.pushState({ path: newurl }, '', newurl);
    }
  }, [data, updateMeta]);

  return (
    <div>
      {/* cretae a grid of 3 items that collapse to 1 item on mobile */}
      <div
        className={isGridView ? `grid grid-cols-1 gap-4 md:grid-cols-${3}` : ''}
      >
        {data?.blogposts?.data.map((post) => (
          <BlogListItem
            layout={isGridView ? 'grid' : 'list'}
            key={post.id}
            title={post.attributes?.title}
            content={post.attributes?.description}
            id={post.id}
          />
        ))}
      </div>
      <div className="my-8">
        <BlogListPagination searchMeta={searchMeta} updateMeta={updateMeta} />
      </div>
    </div>
  );
};

export { BlogList };
