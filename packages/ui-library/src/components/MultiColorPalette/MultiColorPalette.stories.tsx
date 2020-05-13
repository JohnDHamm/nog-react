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
  '',
  '',
  '',
  'purple',
  '',
  '',
  '',
];

const StoryComponent = (): JSX.Element => (
  <div style={{ backgroundColor: 'black', padding: '2rem', width: 'auto' }}>
    <MultiColorPalette colors={initialColors} />
  </div>
);

export const Default = () => (
  <ComponentStoryWrapper
    name="MultiColorPalette"
    component={<StoryComponent />}
  />
);
