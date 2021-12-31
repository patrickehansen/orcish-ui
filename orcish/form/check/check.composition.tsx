import React from 'react';
import { Check } from './check';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicCheck = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Check label="Basic Check Box"/>
    </ThemeProvider>
  );
}
