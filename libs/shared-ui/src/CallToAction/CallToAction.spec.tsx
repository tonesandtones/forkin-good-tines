import { render } from '@testing-library/react';

import CallToAction from './CallToAction';

describe('CallToAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CallToAction />);
    expect(baseElement).toBeTruthy();
  });
});
