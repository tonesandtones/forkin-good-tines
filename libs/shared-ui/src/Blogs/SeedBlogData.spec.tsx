import { render } from '@testing-library/react';

import SeedBlogData from './SeedBlogData';

describe('SeedBlogData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SeedBlogData />);
    expect(baseElement).toBeTruthy();
  });
});
