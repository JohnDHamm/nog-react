import React from 'react';
import MultiColorPalette from './MultiColorPalette';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: componentStoryPath('MultiColorPalette'),
};

const initialColors = [
  {
    colorNum: 0,
    colorVal: '#ff0000',
  },
  {
    colorNum: 1,
    colorVal: '#ffff00',
  },
  {
    colorNum: 2,
    colorVal: '#00ff00',
  },

  {
    colorNum: 3,
    colorVal: '#00ffff',
  },
  {
    colorNum: 4,
    colorVal: '#0000ff',
  },
  {
    colorNum: 5,
    colorVal: '#ff00ff',
  },
  {
    colorNum: 6,
    colorVal: '#ffffff',
  },
  {
    colorNum: 7,
    colorVal: '#000000',
  },
  {
    colorNum: 8,
    colorVal: '',
  },
  {
    colorNum: 9,
    colorVal: '',
  },
  {
    colorNum: 10,
    colorVal: '',
  },
  {
    colorNum: 11,
    colorVal: '',
  },
  {
    colorNum: 12,
    colorVal: '#8800ff',
  },
  {
    colorNum: 13,
    colorVal: '#ff8800',
  },
  {
    colorNum: 14,
    colorVal: '',
  },
  {
    colorNum: 15,
    colorVal: '',
  },
];

const StoryComponent: React.FC = (): JSX.Element => {
  const [currentColorNum, setCurrentColorNum] = React.useState<number>(0);

  return (
    <>
      <div style={{ backgroundColor: 'black', padding: '2rem', width: 'auto' }}>
        <MultiColorPalette
          colors={initialColors}
          onCurrentColorNumChange={colorNum => setCurrentColorNum(colorNum)}
          onColorChange={colorObj => console.log('onColorChange:', colorObj)}
        />
      </div>
      <div style={{ color: 'grey', paddingTop: '1rem', fontSize: '1.5rem' }}>
        current color number: {currentColorNum}
      </div>
    </>
  );
};

export const Default = () => (
  <ComponentStoryWrapper
    name="MultiColorPalette"
    component={<StoryComponent />}
  />
);
