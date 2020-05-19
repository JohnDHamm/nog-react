import React from 'react';
import PlayIconButton from './PlayIconButton';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: 'components/IconButtons/PlayIconButton',
};

export const Default = () => (
  <ComponentStoryWrapper
    name="PlayIconButton"
    component={
      <PlayIconButton width={50} onClick={() => console.log('clicked play')} />
    }
  />
);

export const WithCustomColors = () => (
  <ComponentStoryWrapper
    name="PlayIconButton"
    subName="with custom colors"
    component={
      <PlayIconButton
        width={50}
        fill={'grey'}
        hoverFill={'#bada55'}
        onClick={() => console.log('clicked play')}
      />
    }
  />
);
