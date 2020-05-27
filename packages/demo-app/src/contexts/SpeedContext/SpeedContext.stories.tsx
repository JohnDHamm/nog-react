import React from 'react';
import { storyPathHelper } from '../../storybook';
import { ComponentStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';

const usage: StoryCodeLineProps[] = [
  {
    text: '// used in PlayPage.tsx',
    format: 'comment'
  },
  {
    text: "import { SpeedContext } from '/path/to/context';"
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: 'const { speed, setCurrentSpeed } = React.useContext(SpeedContext);'
  }
];

export default {
  title: storyPathHelper('contexts/SpeedContext')
};

export const Default = () => (
  <ComponentStoryWrapper
    name="SpeedContext"
    description="The speed context. The custom hook 'useSpeed()' is used when initializing this context within the app and returns a getter and setter for playback speed of the current pattern."
    component={<></>}
    code={usage}
  />
);
