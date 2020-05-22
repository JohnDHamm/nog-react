import { ColorPaletteObject } from 'ui-library';

export interface Instance {
  instanceNum: number;
  lightColors: Array<number>;
}

const initialColors: Array<ColorPaletteObject> = [
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

// TODO: move this to own file? add param for color? use for new and fill
export const createInitialLightColors = (): Array<number> => {
  const newLightColors = [];
  for (let i = 0; i < 30; i++) {
    newLightColors.push(7);
  }
  return newLightColors;
};

const initialInstances: Array<Instance> = [
  {
    instanceNum: 0,
    lightColors: createInitialLightColors()
  },
  {
    instanceNum: 1,
    lightColors: createInitialLightColors()
  },
  {
    instanceNum: 2,
    lightColors: createInitialLightColors()
  },
  {
    instanceNum: 3,
    lightColors: createInitialLightColors()
  }
];

interface InitialValues {
  colors: Array<ColorPaletteObject>;
  instances: Array<Instance>;
}

export const getNewPatternValues = (): InitialValues => {
  return {
    colors: initialColors,
    instances: initialInstances
  };
};
