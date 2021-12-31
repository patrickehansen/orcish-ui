import React from 'react';
import { ColorBubble } from './color-bubble';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const PrimaryColorBubble = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ColorBubble color={defaultTheme.colors.primary[0]} label="Primary color 1"/>
    </ThemeProvider>
  );
}

export const PrimaryTwoColorBubble = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ColorBubble color={defaultTheme.colors.primary[1]} label="Primary color 2"/>
    </ThemeProvider>
  );
}

export const SecondaryColorBubble = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ColorBubble color={defaultTheme.colors.secondary[0]} label="Secondary color 1"/>
    </ThemeProvider>
  );
}

export const SecondaryTwoColorBubble = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ColorBubble color={defaultTheme.colors.secondary[1]} label="Secondary color 2"/>
    </ThemeProvider>
  );
}
