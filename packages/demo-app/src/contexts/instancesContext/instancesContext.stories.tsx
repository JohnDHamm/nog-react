import React from 'react';
import { ComponentStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';

const usage: StoryCodeLineProps[] = [
  {
    text: "import { instancesContext } from '/path/to/context';"
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: '// in component or page',
    format: 'comment'
  },
  {
    text:
      'const { instances, setCurrentInstances } = React.useContext(instancesContext);'
  }
];
export default {
  title: 'demo-app/contexts/instancesContext'
};

export const Default = () => (
  <ComponentStoryWrapper
    name="instancesContext"
    description="The instances context. The custom hook 'useInstances()' is used when initializing this context within the app and returns a getter and setter for instances of the current pattern."
    component={<></>}
    code={usage}
  />
);
