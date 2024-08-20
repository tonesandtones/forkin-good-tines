import { render } from '@testing-library/react';

import BlogListPagination from './BlogListPagination';

describe('BlogListPagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogListPagination />);
    expect(baseElement).toBeTruthy();
  });
});
