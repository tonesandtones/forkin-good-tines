import { render } from '@testing-library/react';

import UseProfilePanel from './UseProfilePanel';

describe('UseProfilePanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseProfilePanel />);
    expect(baseElement).toBeTruthy();
  });
});
