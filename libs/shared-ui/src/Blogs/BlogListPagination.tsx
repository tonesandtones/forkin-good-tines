'use client';
import { useSearchParams } from 'next/navigation';
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
  pageCount,
  total,
  defaultPageSize = 10,
}: {
  pageCount: number;
  defaultPageSize: number;
  total: number;
}) {
  const searchParams = useSearchParams();

  const page = searchParams.get('page')
    ? parseInt(searchParams.get('page') ?? '1')
    : 1;

  const pageSize = searchParams.get('pageSize')
    ? parseInt(searchParams.get('pageSize') as string)
    : defaultPageSize;

  const getPageNumbers = () => {
    const pages = [];

    //calc startpage. sgould be 1 or 2 less than the current page
    // const startPage = Math.max(1, page - 2);

    // //calc endpage. should be 2 or 1 more than the current
    // //if the endpage is
    // const endPage = Math.min(pageCount, page + 2);

    // calculate the start and endpage so there are always 5 pages
    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(pageCount, page + 2);
    if (endPage - startPage < 4) {
      if (startPage === 1) {
        endPage = Math.min(pageCount, startPage + 4);
      } else {
        startPage = Math.max(1, endPage - 4);
      }
    }

    if (startPage > 1) {
      // pages.push(1);
      if (startPage >= 2) {
        pages.push('...');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < pageCount) {
      if (endPage <= pageCount - 1) {
        pages.push('...');
      }
      // pages.push(pageCount);
    }

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

  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${prevBatch}&pageSize=${pageSize}`}
            />
          </PaginationItem>
        )}

        {getPageNumbers().map((pageNumber, idx) => {
          if (pageNumber === '...') {
            return <PaginationEllipsis key={idx} />;
          }

          return (
            <PaginationItem key={idx}>
              <PaginationLink
                isActive={pageNumber === page}
                href={`?page=${pageNumber}&pageSize=${pageSize}`}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {page < pageCount && (
          <PaginationItem>
            <PaginationNext href={`?page=${nextBatch}&pageSize=${pageSize}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export default BlogListPagination;
