import { render } from '@testing-library/react';

import BlogListItem from '../BlogListItem';

describe('BlogListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogListItem />);
    expect(baseElement).toBeTruthy();
  });
});
