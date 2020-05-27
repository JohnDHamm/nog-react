import React from 'react';

declare global {
  interface ColorPaletteObject {
    colorNum: number;
    colorVal: string;
  }

  interface ColorPaletteContextInterface {
    colorPalette: Array<ColorPaletteObject>;
    setCurrentColorPalette: (colorPalette: Array<ColorPaletteObject>) => void;
  }
}

export const initialColors: Array<ColorPaletteObject> = [
  { colorNum: 0, colorVal: '#ff0000' },
  { colorNum: 1, colorVal: '#ffff00' },
  { colorNum: 2, colorVal: '#00ff00' },
  { colorNum: 3, colorVal: '#00ffff' },
  { colorNum: 4, colorVal: '#0000ff' },
  { colorNum: 5, colorVal: '#ff00ff' },
  { colorNum: 6, colorVal: '#ffffff' },
  { colorNum: 7, colorVal: '#000000' },
  { colorNum: 8, colorVal: '' },
  { colorNum: 9, colorVal: '' },
  { colorNum: 10, colorVal: '' },
  { colorNum: 11, colorVal: '' },
  { colorNum: 12, colorVal: '' },
  { colorNum: 13, colorVal: '' },
  { colorNum: 14, colorVal: '' },
  { colorNum: 15, colorVal: '' }
];

export const COLOR_PALETTE_DEFAULT_VALUE: ColorPaletteContextInterface = {
  colorPalette: initialColors,
  setCurrentColorPalette: () => {}
};

export const ColorPaletteContext = React.createContext<
  ColorPaletteContextInterface
>(COLOR_PALETTE_DEFAULT_VALUE);
