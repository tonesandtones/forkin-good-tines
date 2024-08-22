'use client';
import { ResponseCollectionMeta } from '@sharknado/cms-api';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../pagination';
export function BlogListPagination({
  searchMeta,
  updateMeta,
}: {
  searchMeta: ResponseCollectionMeta | null | undefined;
  updateMeta: Dispatch<
    SetStateAction<ResponseCollectionMeta | null | undefined>
  >;
}) {
  // const searchParams = useSearchParams();

  // const page = searchParams.get('page')
  //   ? parseInt(searchParams.get('page') ?? '1')
  //   : 1;

  // const pageSize = searchParams.get('pageSize')
  //   ? parseInt(searchParams.get('pageSize') as string)
  //   : defaultPageSize;

  const [page, setPage] = useState<number>(searchMeta?.pagination.page ?? 1);
  const [pageSize, setPageSize] = useState<number>(
    searchMeta?.pagination.pageSize ?? 10
  );
  const [pageCount, setPageCount] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(
    searchMeta?.pagination.total ?? 0
  );

  useEffect(() => {
    if (searchMeta?.pagination) {
      const { pageSize = 10, page = 1, total = 0 } = searchMeta.pagination;
      setPageSize(pageSize);
      setPage(page);
      setTotalResults(total);
      setPageCount(Math.ceil(total / pageSize));
    }
  }, [searchMeta]);

  const getPageNumbers = (): string[] => {
    const pages: string[] = [];
    const pageCount = Math.ceil(totalResults / pageSize);

    // Calculate start and end page ensuring there are always up to 5 pages shown
    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(pageCount, page + 2);

    if (endPage - startPage < 4) {
      if (startPage === 1) {
        endPage = Math.min(pageCount, startPage + 4);
      } else {
        startPage = Math.max(1, endPage - 4);
      }
    }

    // Add ellipsis if starting page is greater than 1
    if (startPage > 1) pages.push('...');

    // Add page numbers between startPage and endPage
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i.toString());
    }

    // Add ellipsis if ending page is less than total page count
    if (endPage < pageCount) pages.push('...');

    return pages;
  };

  //loop through getPageNumbers and create a list of numbers
  const numbers = getPageNumbers().map((pageNumber, idx) => {
    if (pageNumber !== '...') {
      return Number(pageNumber);
    }
    return 0;
  });

  //get the max number in the array
  const maxPage = Math.max(...numbers);
  //calculate the number for next batch of pages
  // make it 5 above the max page but less than the total number of pages
  const nextBatch = maxPage + 5 < pageCount ? maxPage + 5 : pageCount;

  //get the min number in the array
  const minPage = Math.min(...numbers);
  //calculate the number for previous batch of pages
  // make it 5 below the min page but greater than 1
  const prevBatch = minPage - 5 > 1 ? minPage - 5 : 1;

  //create a function to tak the page number and update the meta
  const handlePageChange = (pageNumber: number) => {
    const newSearchMeta = JSON.parse(JSON.stringify(searchMeta));

    newSearchMeta.pagination.page = pageNumber;
    updateMeta(newSearchMeta);
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Render previous button if not on the first page */}
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={() => handlePageChange(prevBatch)} />
          </PaginationItem>
        )}

        {/* Render page numbers and ellipses */}
        {getPageNumbers().map((pageNumber, index) =>
          pageNumber === '...' ? (
            <PaginationEllipsis key={`ellipsis-${index}`} />
          ) : (
            <PaginationItem key={`page-${pageNumber}`}>
              <PaginationLink
                isActive={Number(pageNumber) === page}
                onClick={() => handlePageChange(Number(pageNumber))}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* Render next button if not on the last page */}
        {page < pageCount && (
          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(nextBatch)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export default BlogListPagination;
