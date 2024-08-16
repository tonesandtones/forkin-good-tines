import { render } from '@testing-library/react';

import BlogList from './BlogList';

describe('BlogList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogList />);
    expect(baseElement).toBeTruthy();
  });
});
