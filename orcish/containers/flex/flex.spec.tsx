import React from 'react';
import { render } from '@testing-library/react';
import { BasicFlex } from './flex.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFlex />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
