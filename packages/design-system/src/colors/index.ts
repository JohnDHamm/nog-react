const BACKGROUND_GREY = '#1a1a1a';
const BADASS = '#BADA55';
const BLACK = '#000';
const GREY = '#808080';
const NAV_GREY = '#555';
const NOG_GREEN = '#215C2E';
const NOG_RED = '#701626';
const TEXT = '#333';
const WHITE = '#FFF';

export type ColorNameType =
  | 'BACKGROUND_GREY'
  | 'BADASS'
  | 'BLACK'
  | 'GREY'
  | 'NAV_GREY'
  | 'NOG_GREEN'
  | 'NOG_RED'
  | 'TEXT'
  | 'WHITE';

// the order of COLOR_NAMES is for display in storybook
export const COLOR_NAMES: ColorNameType[] = [
  'NOG_GREEN',
  'NOG_RED',
  'TEXT',
  'BACKGROUND_GREY',
  'NAV_GREY',
  'GREY',
  'BLACK',
  'WHITE',
  'BADASS'
];

export type ColorsType = {
  [key in ColorNameType]: string;
};

export const COLORS: ColorsType = {
  BACKGROUND_GREY,
  BADASS,
  BLACK,
  GREY,
  NAV_GREY,
  NOG_GREEN,
  NOG_RED,
  TEXT,
  WHITE
};
