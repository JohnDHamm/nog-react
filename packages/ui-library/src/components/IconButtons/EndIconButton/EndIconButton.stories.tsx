import React from 'react';
import EndIconButton from './EndIconButton';
import { ComponentStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';
import {
  componentStoryPath,
  iconButtonComponentProps,
} from '../../../storybook';

const usage: StoryCodeLineProps[] = [
  {
    text: 'import { EndIconButton } from "ui-library"',
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
    text: '<EndIconButton',
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
    text: 'onClick={() => handleEndClick()}',
    indent: true,
  },
  {
    text: '/>',
  },
];

export default {
  title: componentStoryPath('IconButtons/EndIconButton'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="EndIconButton"
    description="Navigation button to go to the end."
    component={
      <EndIconButton width={50} onClick={() => console.log('clicked end')} />
    }
    componentProps={iconButtonComponentProps}
    code={usage}
  />
);

export const WithCustomColors = () => (
  <ComponentStoryWrapper
    name="EndIconButton"
    description="Navigation button to go to the end."
    subName="with custom colors"
    component={
      <EndIconButton
        width={50}
        color={'grey'}
        hoverColor={'#bada55'}
        onClick={() => console.log('clicked end')}
      />
    }
    componentProps={iconButtonComponentProps}
    code={usage}
  />
);
