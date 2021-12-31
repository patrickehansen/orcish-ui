export interface Colors {
  primary: string[];
  secondary: string[];
  white: string;
  black: string;
  red: string;
  mainGray: string;
  grays: string[];
  dice: string[];
  text: string[];
  background: string[];
}

export interface Sizes {
  XXS: string;
  XS: string;
  XSS: string;
  S: string;
  SS: string;
  M: string;
  MM: string;
  L: string;
  LL: string;
  XL: string;
  XML: string;
  XXL: string;
}

export interface BorderRadius {
  fullStandard: string;
  bottomStandard: string;
  fullRound: string;
  circle: string;
}

export interface FontSizes {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;

  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
}

export interface Theme {
  colors: Colors;
  sizes: Sizes;
  shadows: string[];
  borderRadius: BorderRadius;
  fontSizes: FontSizes;
}

export type ThemeProps = {
  theme?: Theme;
}
