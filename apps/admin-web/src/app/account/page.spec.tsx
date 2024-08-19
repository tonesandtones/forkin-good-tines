import { render } from '@testing-library/react';

import AccountDashboard from './page';

describe('AccountDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
