import React from 'react';
import StartIconButton from './StartIconButton';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: 'components/IconButtons/StartIconButton',
};

export const Default = () => (
  <ComponentStoryWrapper
    name="StartIconButton"
    component={
      <StartIconButton
        width={50}
        onClick={() => console.log('clicked start')}
      />
    }
  />
);

export const WithCustomColors = () => (
  <ComponentStoryWrapper
    name="StartIconButton"
    subName="with custom colors"
    component={
      <StartIconButton
        width={50}
        fill={'grey'}
        hoverFill={'#bada55'}
        onClick={() => console.log('clicked start')}
      />
    }
  />
);
