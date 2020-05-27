import React from 'react';
import { FunctionStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';

const usage: StoryCodeLineProps[] = [
  {
    text: '// App.tsx',
    format: 'comment'
  },
  {
    text: "import { instancesContext } from './context';"
  },
  {
    text: "import { useInstances } from './hooks';"
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: 'const instances = useInstances();'
  },
  {
    text: 'return ('
  },
  {
    text: '<instancesContext.Provider value={instances}>',
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
    text: '</instancesContext.Provider>'
  }
];
export default {
  title: 'demo-app/hooks/useInstances()'
};

export const Default = () => (
  <FunctionStoryWrapper
    name="useInstances"
    description="Custom hook to initialize the instances context for the context provider."
    usage={usage}
  />
);
