import React from 'react';
import { render } from '@testing-library/react';
import { BasicP } from './p.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicP />);
  const rendered = getByText('hello from P');
  expect(rendered).toBeTruthy();
});
