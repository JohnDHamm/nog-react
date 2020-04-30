import React from 'react';
import { FunctionStoryWrapper } from '../../storybook';

export default {
  title: 'function-library/example',
};

export const SayHello = () => (
  <FunctionStoryWrapper
    name="sayHello"
    // eslint-disable-next-line no-template-curly-in-string
    description='Given a string, returns the string "Hello, ${name}."'
    args={'name: string;'}
    usage={[
      {
        text: 'sayHello("John");',
      },
      {
        text: 'a second line, indented',
        indent: true,
      },
      {
        text: '// "Hello, John."',
        format: 'comment',
      },
    ]}
    notes="You can add some notes if needed here."
  />
);

SayHello.story = {
  name: 'sayHello()',
};
