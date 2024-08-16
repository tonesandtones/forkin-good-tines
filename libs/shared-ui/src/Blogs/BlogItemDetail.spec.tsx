import { render } from '@testing-library/react';

import BlogItemDetail from './BlogItemDetail';

describe('BlogItemDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogItemDetail />);
    expect(baseElement).toBeTruthy();
  });
});
