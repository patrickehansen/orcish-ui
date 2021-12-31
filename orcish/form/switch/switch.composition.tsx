import React from 'react';
import { Switch } from './switch';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicSwitch = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Switch name="switch" />
    </ThemeProvider>
  );
}
