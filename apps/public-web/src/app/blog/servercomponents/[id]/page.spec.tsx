import { render } from '@testing-library/react';

import BlogDetail from './page';

describe('BlogDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogDetail params={{ id: '1' }} />);
    expect(baseElement).toBeTruthy();
  });
});
