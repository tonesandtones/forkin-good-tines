import { render } from '@testing-library/react';

import ContentPageHero from './ContentPageHero';

describe('ContentPageHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentPageHero />);
    expect(baseElement).toBeTruthy();
  });
});
