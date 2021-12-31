import React from 'react';
import { Slider } from './slider';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicSlider = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Slider
        min={0}
        max={100}
        trackLength={20}
      />
    </ThemeProvider>
  );
}

export const BasicSliderWithIntial = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Slider
        min={0}
        max={100}
        initial={50}
        trackLength={20}
      />
    </ThemeProvider>
  );
}

export const SliderWithIntialAndRange = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Slider
        min={-100}
        max={150}
        initial={75}
        trackLength={20}
      />
    </ThemeProvider>
  );
}