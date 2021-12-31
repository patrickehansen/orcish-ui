import React from 'react';
import { Input } from './input';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicInput = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Input label="Character Name"/>
    </ThemeProvider>
  );
}

export const RequiredInput = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Input label="Character Name" required={true}/>
    </ThemeProvider>
  );
}

export const InputWithDefaultValue = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Input label="Character Name" required={true} defaultValue="Dretkag"/>
    </ThemeProvider>
  );
}

export const NumberInput = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Input label="Character Name" required={true} defaultValue="Dretkag" type="number"/>
    </ThemeProvider>
  );
}
