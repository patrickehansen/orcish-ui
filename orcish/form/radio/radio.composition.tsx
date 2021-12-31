import React from 'react';
import { Radio } from './radio';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicRadio = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Radio label="Radio" />
    </ThemeProvider>
  );
}
