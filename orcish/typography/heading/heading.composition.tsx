import React from 'react';
import { H1 } from './heading';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicHeading = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <H1>hello world!</H1>
    </ThemeProvider>
  );
}
