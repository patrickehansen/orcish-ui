import React from 'react';
import { render } from '@testing-library/react';
import { BasicTabPanel } from './tab-panel.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTabPanel />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
