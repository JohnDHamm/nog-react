import React from 'react';
import NextIconButton from './NextIconButton';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: 'components/IconButtons/NextIconButton',
};

export const Default = () => (
  <ComponentStoryWrapper
    name="NextIconButton"
    component={
      <NextIconButton
        width={50}
        onClick={() => console.log('clicked next button')}
      />
    }
  />
);

export const WithCustomColors = () => (
  <ComponentStoryWrapper
    name="NextIconButton"
    subName="with custom colors"
    component={
      <NextIconButton
        width={50}
        fill={'grey'}
        hoverFill={'#bada55'}
        onClick={() => console.log('clicked next button')}
      />
    }
  />
);
