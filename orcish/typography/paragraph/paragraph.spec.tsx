import React from 'react';
import { render } from '@testing-library/react';
import { BasicParagraph } from './paragraph.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicParagraph />);
  const rendered = getByText('hello world!');
  expect(true).toBeTruthy();
});
