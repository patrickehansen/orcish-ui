import React from 'react';
import { TextArea } from './textarea';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicTextarea = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <TextArea defaultValue="testTestTest"/>
    </ThemeProvider>
  );
}
