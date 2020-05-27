import React from 'react';
import { initialColors } from '../../contexts/ColorPaletteContext/ColorPaletteContext';

export const useColorPalette = (): ColorPaletteContextInterface => {
  const [colorPalette, setColorPalette] = React.useState<ColorPaletteObject[]>(
    initialColors
  );

  const setCurrentColorPalette = React.useCallback(
    (currentColorPalette: Array<ColorPaletteObject>): void => {
      setColorPalette(currentColorPalette);
    },
    []
  );

  return { colorPalette, setCurrentColorPalette };
};
