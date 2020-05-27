import React from 'react';
import { storyPathHelper } from '../../storybook';
import { FunctionStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';

const usage: StoryCodeLineProps[] = [
  {
    text: '// App.tsx',
    format: 'comment'
  },
  {
    text: "import { SpeedContext } from './context';"
  },
  {
    text: "import { useSpeed } from './hooks';"
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: 'const speed = useSpeed();'
  },
  {
    text: 'return ('
  },
  {
    text: '<SpeedContext.Provider value={speed}>',
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
    text: '</SpeedContext.Provider>',
    indent: true
  },
  {
    text: ');'
  }
];
export default {
  title: storyPathHelper('hooks/useSpeed')
};

export const Default = () => (
  <FunctionStoryWrapper
    name="useSpeed"
    description="Custom hook to initialize the speed context for the context provider."
    usage={usage}
  />
);
