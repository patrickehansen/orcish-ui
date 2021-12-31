import React from 'react';
import { Button } from './button';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export const BasicButton = () => (
  <ThemeProvider theme={defaultTheme}>
    <Button text="Basic Button" onClick={() => {}} />
  </ThemeProvider>
);

export const InvertedButton = () => (
  <ThemeProvider theme={defaultTheme}>
    <Button variant="invert" text="Inverted Button" onClick={() => {}} />
  </ThemeProvider>
);

export const RedButton = () => (
  <ThemeProvider theme={defaultTheme}>
    <Button variant="red" text="Red Button" onClick={() => {}} />
  </ThemeProvider>
);

export const NeutralButton = () => (
  <ThemeProvider theme={defaultTheme}>
    <Button variant="neutral" text="Neutral Button" onClick={() => {}} />
  </ThemeProvider>
);

export const IconButton = () => (
  <ThemeProvider theme={defaultTheme}>
    <Button variant="neutral" icon={faChevronLeft} onClick={() => {}} />
  </ThemeProvider>
);

export const IconButtonWithText = () => (
  <ThemeProvider theme={defaultTheme}>
    <Button variant="neutral" icon={faChevronLeft} text="Left" onClick={() => {}} />
  </ThemeProvider>
);