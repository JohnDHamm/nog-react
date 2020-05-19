import React from 'react';
import PreviousIconButton from './PreviousIconButton';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: 'components/IconButtons/PreviousIconButton',
};

export const Default = () => (
  <ComponentStoryWrapper
    name="PreviousIconButton"
    component={
      <PreviousIconButton
        width={50}
        onClick={() => console.log('clicked previous')}
      />
    }
  />
);

export const WithCustomColors = () => (
  <ComponentStoryWrapper
    name="PreviousIconButton"
    subName="with custom colors"
    component={
      <PreviousIconButton
        width={50}
        fill={'grey'}
        hoverFill={'#bada55'}
        onClick={() => console.log('clicked previous')}
      />
    }
  />
);
