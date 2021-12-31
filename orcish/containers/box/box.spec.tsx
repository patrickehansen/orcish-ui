import React from 'react';
import { render } from '@testing-library/react';
import { BasicBox } from './box.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBox />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
