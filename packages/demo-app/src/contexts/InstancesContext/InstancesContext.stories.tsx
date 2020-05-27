import React from 'react';
import { storyPathHelper } from '../../storybook';
import { ComponentStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';

const usage: StoryCodeLineProps[] = [
  {
    text: '// used in CreatePage.tsx and PlayPage.tsx',
    format: 'comment'
  },
  {
    text: "import { InstancesContext } from '/path/to/context';"
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text:
      'const { instances, setCurrentInstances } = React.useContext(InstancesContext);'
  }
];
export default {
  title: storyPathHelper('contexts/InstancesContext')
};

export const Default = () => (
  <ComponentStoryWrapper
    name="InstancesContext"
    description="The instances context. The custom hook 'useInstances()' is used when initializing this context within the app and returns a getter and setter for instances of the current pattern."
    component={<></>}
    code={usage}
  />
);
