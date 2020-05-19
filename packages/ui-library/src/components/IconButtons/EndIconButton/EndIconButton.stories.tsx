import React from 'react';
import EndIconButton from './EndIconButton';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: 'components/IconButtons/EndIconButton',
};

export const Default = () => (
  <ComponentStoryWrapper
    name="EndIconButton"
    component={
      <EndIconButton width={50} onClick={() => console.log('clicked end')} />
    }
  />
);

export const WithCustomColors = () => (
  <ComponentStoryWrapper
    name="EndIconButton"
    subName="with custom colors"
    component={
      <EndIconButton
        width={50}
        fill={'grey'}
        hoverFill={'#bada55'}
        onClick={() => console.log('clicked end')}
      />
    }
  />
);
