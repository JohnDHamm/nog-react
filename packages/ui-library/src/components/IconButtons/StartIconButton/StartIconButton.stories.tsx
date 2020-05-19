import React from 'react';
import StartIconButton from './StartIconButton';
import { ComponentStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';
import {
  componentStoryPath,
  iconButtonComponentProps,
} from '../../../storybook';

const usage: StoryCodeLineProps[] = [
  {
    text: 'import { StartIconButton } from "ui-library"',
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
    text: '<StartIconButton',
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
    text: 'onClick={() => handleStartClick()}',
    indent: true,
  },
  {
    text: '/>',
  },
];

export default {
  title: componentStoryPath('IconButtons/StartIconButton'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="StartIconButton"
    description="Navigation button to go to the start."
    component={
      <StartIconButton
        width={50}
        onClick={() => console.log('clicked start')}
      />
    }
    componentProps={iconButtonComponentProps}
    code={usage}
  />
);

export const WithCustomColors = () => (
  <ComponentStoryWrapper
    name="StartIconButton"
    description="Navigation button to go to the start."
    subName="with custom colors"
    component={
      <StartIconButton
        width={50}
        color={'grey'}
        hoverColor={'#bada55'}
        onClick={() => console.log('clicked start')}
      />
    }
    componentProps={iconButtonComponentProps}
    code={usage}
  />
);
