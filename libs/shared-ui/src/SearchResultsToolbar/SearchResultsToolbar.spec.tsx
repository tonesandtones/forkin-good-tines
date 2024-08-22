import { render } from '@testing-library/react';

import SearchResultsToolbar from './SearchResultsToolbar';

describe('SearchResultsToolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchResultsToolbar />);
    expect(baseElement).toBeTruthy();
  });
});
