import React from 'react';
import { render } from '@testing-library/react';
import { BasicItalic } from './italic.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicItalic />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
