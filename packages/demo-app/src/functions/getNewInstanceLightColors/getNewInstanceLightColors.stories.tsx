import React from 'react';
import { storyPathHelper } from '../../storybook';
import { FunctionStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';

const usage: Array<StoryCodeLineProps> = [
  {
    text: 'import { getNewInstanceLightColors } from "function-library"'
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: 'const newLightColors = getNewInstanceLightColors();'
  },
  {
    text:
      '// => [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]',
    format: 'comment'
  }
];
export default {
  title: storyPathHelper('functions/getNewInstanceLightColors()')
};

export const Default = () => (
  <FunctionStoryWrapper
    name="getNewInstanceLightColors"
    description="Used to get the initial light colors for a new instance, returns an array of 30 values of 7 (the color number for black)."
    usage={usage}
  />
);
