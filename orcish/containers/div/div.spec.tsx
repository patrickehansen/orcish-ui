import React from 'react';
import { render } from '@testing-library/react';
import { BasicDiv } from './div.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDiv />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
