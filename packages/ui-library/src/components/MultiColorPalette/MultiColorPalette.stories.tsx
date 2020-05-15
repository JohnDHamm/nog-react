import React from 'react';
import MultiColorPalette, { ColorPaletteObject } from './MultiColorPalette';
import { componentStoryPath } from '../../storybook';
import {
  ComponentStoryWrapper,
  PropsTableProps,
  StoryCodeLineProps,
  StoryPropsTable,
} from 'storybook-helpers';

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
  { colorNum: 12, colorVal: '#8800ff' },
  { colorNum: 13, colorVal: '#ffa05c' },
  { colorNum: 14, colorVal: '' },
  { colorNum: 15, colorVal: '' },
];

const StoryComponent: React.FC = (): JSX.Element => {
  const [currentColorNum, setCurrentColorNum] = React.useState<number>(0);
  const [changedValue, setChangedValue] = React.useState<string>('');

  return (
    <>
      <div style={{ backgroundColor: 'black', padding: '2rem', width: 'auto' }}>
        <MultiColorPalette
          colors={initialColors}
          onCurrentColorNumChange={colorNum => setCurrentColorNum(colorNum)}
          onColorChange={colorObj => setChangedValue(colorObj.colorVal)}
        />
      </div>
      <div style={{ color: 'grey', paddingTop: '1rem', fontSize: '1rem' }}>
        <p style={{ fontStyle: 'italic' }}>example uses of callbacks:</p>
        <div>current color number: {currentColorNum}</div>
        <div>new color value: {changedValue}</div>
      </div>
    </>
  );
};

const usageCode: Array<StoryCodeLineProps> = [
  {
    text: 'import { MultiColorPalette } from "ui-library";',
  },
  {
    text: '',
    format: 'blank',
  },
  {
    text: '<MultiColorPalette',
  },
  {
    text: 'colors={initialColors}',
    indent: true,
  },
  {
    text: 'onCurrentColorNumChange={handleColNumChange(colorNum)}',
    indent: true,
  },
  {
    text: 'onColorChange={handleColorChange(colorObj)}',
    indent: true,
  },
  {
    text: '/>',
  },
];

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'colors',
    propType: 'Array<ColorPaletteObject>',
    description: 'initial 16 colors supplied to the component',
    required: true,
  },
  {
    propName: 'onCurrentColorNumChange',
    propType: '(colorNum: number) => void',
    description: 'callback when the current color number changes',
    required: true,
  },
  {
    propName: 'onColorChange',
    propType: '(colorObj: ColorPaletteObject) => void',
    description: 'callback when a color is changed',
    required: true,
  },
];

const CPOprops: Array<PropsTableProps> = [
  {
    propName: 'colorNum',
    propType: 'number',
    description: '0-15',
    required: true,
  },
  {
    propName: 'colorVal',
    propType: 'string',
    description: 'hexadecimal format',
    required: true,
  },
];
export default {
  title: componentStoryPath('MultiColorPalette'),
};

export const Default = () => (
  <>
    <ComponentStoryWrapper
      name="MultiColorPalette"
      description="A component to create colors and select the current color for use in a pattern instance."
      component={<StoryComponent />}
      code={usageCode}
      componentProps={componentProps}
      notes="The component assumes 16 colors are supplied, with the first 8 colors being non-editable. Currently the initial colors supplied must be in order in the array."
    />
    <StoryPropsTable title="ColorPaletteObject" componentProps={CPOprops} />
  </>
);
