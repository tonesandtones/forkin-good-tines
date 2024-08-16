import { render } from '@testing-library/react';

import LibCmsApi from './lib-cms-api';

describe('LibCmsApi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibCmsApi />);
    expect(baseElement).toBeTruthy();
  });
});
