import { render } from '@testing-library/react';

import DynamicPageContent from './DynamicPageContent';

describe('DynamicPageContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DynamicPageContent />);
    expect(baseElement).toBeTruthy();
  });
});
