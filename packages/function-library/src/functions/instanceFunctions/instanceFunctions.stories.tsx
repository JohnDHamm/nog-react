import React from 'react';
import { functionStoryPath } from '../../storybook';
import { FunctionStoryWrapper } from 'storybook-helpers';

export default {
  title: functionStoryPath('instanceFunctions')
};

export const GetNewInstanceLightColors = () => (
  <FunctionStoryWrapper
    name="getNewInstanceLightColors"
    description="Used to get the initial light colors for a new instance, returns an array of 30 values of 7 (the color number for black)."
    usage={[
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
    ]}
  />
);

GetNewInstanceLightColors.story = {
  name: 'getNewInstanceLightColors()'
};
