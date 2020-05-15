import React from 'react';
import MultiColorPalette from './MultiColorPalette';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: componentStoryPath('MultiColorPalette'),
};

const initialColors = [
  '#FF0000',
  '#FFFF00',
  '#00FF00',
  '#00FFFF',
  '#0000FF',
  '#FF00FF',
  '#FFFFFF',
  '#000000',
  '',
  '#ff0000',
  '#00ffff',
  '',
  '#8800ff',
  '#ff8800',
  '',
  '',
];

const StoryComponent: React.FC = (): JSX.Element => {
  const [currentColorNum, setCurrentColorNum] = React.useState<number>(0);

  return (
    <>
      <div style={{ backgroundColor: 'black', padding: '2rem', width: 'auto' }}>
        <MultiColorPalette
          colors={initialColors}
          onCurrentColorNumChange={colorNum => setCurrentColorNum(colorNum)}
        />
      </div>
      <div style={{ color: 'grey', marginTop: '1 rem', fontSize: '1.5rem' }}>
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
