import React from 'react';
import { TransferList } from './transfer-list';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const BasicTransferList = () => {
  return (
    <ThemeProvider theme={defaultTheme} >
      <TransferList 
        left={{
          title: 'Left Items',
          entries: [
            {
              id: '11',
              label: 'Left One',
              value: '11',
            },
            {
              id: '12',
              label: 'Left Two',
              value: '11',
            },
            {
              id: '13',
              label: 'Left Three',
              value: '11',
            },
          ]
        }} 
        right={{
          title: 'Right Items',
          entries: [
            {
              id: '21',
              label: 'Right One',
              value: '11',
            },
            {
              id: '22',
              label: 'Right Two',
              value: '11',
            },
            {
              id: '23',
              label: 'Right Three',
              value: '11',
            },
          ]
        }} 
        onUpdate={() => {}}
      />
    </ThemeProvider>
  );
}
