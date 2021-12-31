import React from 'react';
import { Expandable } from './expandable';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicExpandable = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Expandable title="Test Expandable">
        <div>
          Hello world!
        </div>
      </Expandable>
    </ThemeProvider>
  );
}
