import React from 'react';
import { Avatar } from './avatar';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';

export const XSmallAvatar = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Avatar
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0zvbuXrUg4SEY-LQNXDIOnBEu8ITDWHTTQ&usqp=CAU'
        size="XS"
        name="Avatar"
      />
    </ThemeProvider>
  );
}

export const SmallAvatar = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Avatar
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0zvbuXrUg4SEY-LQNXDIOnBEu8ITDWHTTQ&usqp=CAU'
        size="S"
        name="Avatar"
      />
    </ThemeProvider>
  );
}

export const MediumAvatar = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Avatar
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0zvbuXrUg4SEY-LQNXDIOnBEu8ITDWHTTQ&usqp=CAU'
        size="M"
        name="Avatar"
      />
    </ThemeProvider>
  );
}

export const LargeAvatar = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Avatar
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0zvbuXrUg4SEY-LQNXDIOnBEu8ITDWHTTQ&usqp=CAU'
        size="L"
        name="Avatar"
      />
    </ThemeProvider>
  );
}

export const UnlabeledAvatar  = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Avatar
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0zvbuXrUg4SEY-LQNXDIOnBEu8ITDWHTTQ&usqp=CAU'
        size="M"
      />
    </ThemeProvider>
  );
}