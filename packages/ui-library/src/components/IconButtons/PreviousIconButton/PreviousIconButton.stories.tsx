import React from 'react';
import PreviousIconButton from './PreviousIconButton';
import { ComponentStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';
import {
  componentStoryPath,
  iconButtonComponentProps,
} from '../../../storybook';

const usage: StoryCodeLineProps[] = [
  {
    text: 'import { PreviousIconButton } from "ui-library"',
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
    text: '<PreviousIconButton',
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
    text: 'onClick={() => handlePreviousClick()}',
    indent: true,
  },
  {
    text: '/>',
  },
];

export default {
  title: componentStoryPath('IconButtons/PreviousIconButton'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="PreviousIconButton"
    description="Navigation button to go to previous instance."
    component={
      <PreviousIconButton
        width={50}
        onClick={() => console.log('clicked previous')}
      />
    }
    componentProps={iconButtonComponentProps}
    code={usage}
  />
);

export const WithCustomColors = () => (
  <ComponentStoryWrapper
    name="PreviousIconButton"
    description="Navigation button to go to previous instance."
    subName="with custom colors"
    component={
      <PreviousIconButton
        width={50}
        color={'grey'}
        hoverColor={'#bada55'}
        onClick={() => console.log('clicked previous')}
      />
    }
    componentProps={iconButtonComponentProps}
    code={usage}
  />
);
