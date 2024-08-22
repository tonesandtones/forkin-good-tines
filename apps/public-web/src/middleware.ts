import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page');
  if (page) {
    requestHeaders.set('x-search-page', page);
  }

  const pageSize = searchParams.get('pageSize');
  if (pageSize) {
    requestHeaders.set('x-search-pageSize', pageSize);
  }

  return NextResponse.next({
    headers: requestHeaders,
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/blog/:path*',
};
