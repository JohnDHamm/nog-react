import React from 'react';
import PlayIconButton from './PlayIconButton';
import { ComponentStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';
import {
  componentStoryPath,
  iconButtonComponentProps,
} from '../../../storybook';

const usage: StoryCodeLineProps[] = [
  {
    text: 'import { PlayIconButton } from "ui-library"',
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
    text: '<PlayIconButton',
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
    text: 'onClick={() => handlePlayClick()}',
    indent: true,
  },
  {
    text: '/>',
  },
];

export default {
  title: componentStoryPath('IconButtons/PlayIconButton'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="PlayIconButton"
    description="Navigation button to play pattern."
    component={
      <PlayIconButton width={50} onClick={() => console.log('clicked play')} />
    }
    componentProps={iconButtonComponentProps}
    code={usage}
  />
);

export const WithCustomColors = () => (
  <ComponentStoryWrapper
    name="PlayIconButton"
    description="Navigation button to play pattern."
    subName="with custom colors"
    component={
      <PlayIconButton
        width={50}
        color={'grey'}
        hoverColor={'#bada55'}
        onClick={() => console.log('clicked play')}
      />
    }
    componentProps={iconButtonComponentProps}
    code={usage}
  />
);
