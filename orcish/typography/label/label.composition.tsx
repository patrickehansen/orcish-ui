import React from 'react';
import { Label } from './label';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicLabel = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Label>hello world!</Label>
    </ThemeProvider>
  );
}
