import React from 'react';
import { P1 } from './text';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicText = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <P1>hello world!</P1>
    </ThemeProvider>
  );
}
