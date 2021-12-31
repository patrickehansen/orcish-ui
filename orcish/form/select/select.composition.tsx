import React from 'react';
import { Select } from './select';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicSelect = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Select 
        name="Select"
        options={[
          {
            label: '1: none',
            value: 'none'
          },
          {
            label: '2: Two',
            value: 'two'
          }
        ]}
      />
    </ThemeProvider>
  );
}
