import React from 'react';
import { Spinner } from './spinner';

import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicSpinner = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Spinner />
    </ThemeProvider>
  );
}
