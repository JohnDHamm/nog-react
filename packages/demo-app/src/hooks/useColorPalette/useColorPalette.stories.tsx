import React from 'react';
import { storyPathHelper } from '../../storybook';
import { FunctionStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';

const usage: StoryCodeLineProps[] = [
  {
    text: '// App.tsx',
    format: 'comment'
  },
  {
    text: "import { ColorPaletteContext } from './context';"
  },
  {
    text: "import { useColorPalette } from './hooks';"
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: 'const speed = useColorPalette();'
  },
  {
    text: 'return ('
  },
  {
    text: '<ColorPaletteContext.Provider value={colorPalette}>',
    indent: true
  },
  {
    text: '<Router>',
    indent: true
  },
  {
    text: '...',
    format: 'comment',
    indent: true
  },
  {
    text: '</Router>',
    indent: true
  },
  {
    text: '</ColorPaletteContext.Provider>',
    indent: true
  },
  {
    text: ');'
  }
];
export default {
  title: storyPathHelper('hooks/useColorPalette')
};

export const Default = () => (
  <FunctionStoryWrapper
    name="useColorPalette"
    description="Custom hook to initialize the color palette context for the context provider."
    usage={usage}
  />
);
