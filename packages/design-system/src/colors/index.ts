const BADASS = '#bada55';
const BLACK = '#000';
const WHITE = '#fff';

export type ColorNameType = 'BADASS' | 'BLACK' | 'WHITE';

export const COLOR_NAMES: ColorNameType[] = ['BADASS', 'BLACK', 'WHITE'];

export type ColorsType = {
  [key in ColorNameType]: string;
};

export const COLORS: ColorsType = {
  BADASS,
  BLACK,
  WHITE
};
