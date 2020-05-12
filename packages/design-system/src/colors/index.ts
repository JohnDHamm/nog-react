const BADASS = '#BADA55';
const BLACK = '#000';
const TEXT = '#333';
const NOG_GREEN = '#215C2E';
const NOG_RED = '#701626';
const WHITE = '#FFF';

export type ColorNameType =
  | 'BADASS'
  | 'BLACK'
  | 'NOG_GREEN'
  | 'NOG_RED'
  | 'TEXT'
  | 'WHITE';

// the order of COLOR_NAMES is for display in storybook
export const COLOR_NAMES: ColorNameType[] = [
  'NOG_GREEN',
  'NOG_RED',
  'TEXT',
  'BLACK',
  'WHITE',
  'BADASS'
];

export type ColorsType = {
  [key in ColorNameType]: string;
};

export const COLORS: ColorsType = {
  BADASS,
  BLACK,
  NOG_GREEN,
  NOG_RED,
  TEXT,
  WHITE
};
