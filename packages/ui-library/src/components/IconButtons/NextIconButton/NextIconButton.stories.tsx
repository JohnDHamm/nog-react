import React from 'react';
import NextIconButton from './NextIconButton';
import { ComponentStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';
import {
  componentStoryPath,
  iconButtonComponentProps,
} from '../../../storybook';

const usage: StoryCodeLineProps[] = [
  {
    text: 'import { NextIconButton } from "ui-library"',
  },
  {
    text: '',
    format: 'blank',
  },
  {
    text: '// use in page or component render',
    format: 'comment',
  },
  {
    text: '<NextIconButton',
  },
  {
    text: 'width={50}',
    indent: true,
  },
  {
    text: 'color={"grey"}',
    indent: true,
  },
  {
    text: 'hoverColor={"#bada55"}',
    indent: true,
  },
  {
    text: 'onClick={() => handleNextClick()}',
    indent: true,
  },
  {
    text: '/>',
  },
];

export default {
  title: componentStoryPath('IconButtons/NextIconButton'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="NextIconButton"
    description="Navigation button to go to next instance."
    component={
      <NextIconButton
        width={50}
        onClick={() => console.log('clicked next button')}
      />
    }
    componentProps={iconButtonComponentProps}
    code={usage}
  />
);

export const WithCustomColors = () => (
  <ComponentStoryWrapper
    name="NextIconButton"
    description="Navigation button to go to next instance."
    subName="with custom colors"
    component={
      <NextIconButton
        width={50}
        color={'grey'}
        hoverColor={'#bada55'}
        onClick={() => console.log('clicked next button')}
      />
    }
    componentProps={iconButtonComponentProps}
    code={usage}
  />
);
