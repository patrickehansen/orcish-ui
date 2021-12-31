import React from 'react';
import { Card } from './card';
import { H3 } from '@tiskahar/orcish.typography.heading';
import { P1 } from '@tiskahar/orcish.typography.paragraph';
import { CopyBox } from '@teambit/documenter.ui.copy-box';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicCard = () => (
  <ThemeProvider theme={defaultTheme}>
    <Card >
      Hello Card!
    </Card>
  </ThemeProvider>
);

export const CardWithCopyBox = () => (
  <ThemeProvider theme={defaultTheme}>
    <Card >
      <H3>
        Endurance
      </H3>
      <P1>
        Copy the roll for endurance
      </P1>
      <CopyBox >[[3d6 - 18]]</CopyBox>
    </Card>
  </ThemeProvider>
);
