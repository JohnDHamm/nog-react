import React from 'react';
import { storyPathHelper } from '../../storybook';
import { ComponentStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';

const usage: StoryCodeLineProps[] = [
  {
    text: '// used in CreatePage.tsx and PlayPage.tsx',
    format: 'comment'
  },
  {
    text: "import { ColorPaletteContext } from '/path/to/context';"
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text:
      'const { colorPalette, setCurrentColorPalette } = React.useContext(ColorPaletteContext);'
  }
];

export default {
  title: storyPathHelper('contexts/ColorPaletteContext')
};

export const Default = () => (
  <ComponentStoryWrapper
    name="ColorPaletteContext"
    description="The color palette context. The custom hook 'useColorPalette()' is used when initializing this context within the app and returns a getter and setter for the color palette of the current pattern."
    component={<></>}
    code={usage}
  />
);
