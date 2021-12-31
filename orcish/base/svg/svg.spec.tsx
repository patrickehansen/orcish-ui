import React from 'react';
import { render } from '@testing-library/react';
import { BasicSvg } from './svg.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSvg />);
  const rendered = getByText('hello from Svg');
  expect(rendered).toBeTruthy();
});
