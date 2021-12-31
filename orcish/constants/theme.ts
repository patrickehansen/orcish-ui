import { Theme } from "./models"

export const defaultTheme: Theme = {
  colors: {
    primary: ['#0e2e3b', '#166678'],
    secondary: ['#7db9b3','#d8d7c3'],
    white: '#ffffed',
    black: '#08071c',
    red: '#a8323c',
    mainGray: 'rgb(8, 7, 28)',
    grays: ['rgb(244,244,244)', 'rgb(218,218,218)', 'rgb(192,192,192)', 'rgb(128,128,128)', 'rgb(64,64,64)'],
    dice: ['#0e2e3b', '#166678', '#7db9b3', '#154211', '#150b47', '#802d00', '#8a38d6', '#d8f026', '#b00e90'],
    text: ['#08071c'],
    background: ['#ffffed', '#0e2e3b'],
  },
  sizes: {
    XXS: '0.3125rem',
    XS: '0.0625rem',
    XSS: '0.125rem',
    S: '0.25rem',
    SS: '0.5rem',
    M: '0.75rem',
    MM: '1rem',
    L: '1.25rem',
    LL: '1.5rem',
    XL: '2rem',
    XML: '2.2rem',
    XXL: '3rem',
  },
  fontSizes: {
    h1: '2rem',
    h2: '1.875rem',
    h3: '1.5rem',
    h4: '1.25rem',
    h5: '1.125rem',
    h6: '1rem',

    p1: '0.9rem',
    p2: '0.85rem',
    p3: '0.8rem',
    p4: '0.75rem',
    p5: '0.7rem',
    p6: '0.6rem',
  },
  shadows: [
    '0px 2px 5px rgba(14, 46, 59, 0.2)',
    '0px 2px 3px rgba(14, 46, 59, 0.6)',
    '0px 3px 6px rgba(14, 46, 59, 0.8)',
    'inset 0px 1px 1px rgba(0,0,0,0.5), 0px 1px 0px rgba(255,255,255,.4)',
    '-2px 0px 4px rgba(8, 7, 28, 0.4)'
  ],
  borderRadius: {
    fullStandard: '4px',
    bottomStandard: '0 0 4px 4px',
    fullRound: '10px',
    circle: '50%',
  }
}
