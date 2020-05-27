import React from 'react';
import { storyPathHelper } from '../../storybook';
import { FunctionStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';

const usage: StoryCodeLineProps[] = [
  {
    text: '// App.tsx',
    format: 'comment'
  },
  {
    text: "import { InstancesContext } from './context';"
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
    text: '<InstancesContext.Provider value={instances}>',
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
    text: '</InstancesContext.Provider>',
    indent: true
  },
  {
    text: ');'
  }
];
export default {
  title: storyPathHelper('hooks/useInstances')
};

export const Default = () => (
  <FunctionStoryWrapper
    name="useInstances"
    description="Custom hook to initialize the instances context for the context provider."
    usage={usage}
  />
);
