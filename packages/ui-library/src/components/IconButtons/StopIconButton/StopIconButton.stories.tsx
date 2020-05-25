import React from 'react';
import StopIconButton from './StopIconButton';
import { ComponentStoryWrapper, StoryCodeLineProps } from 'storybook-helpers';
import {
  componentStoryPath,
  iconButtonComponentProps,
} from '../../../storybook';

const usage: StoryCodeLineProps[] = [
  {
    text: 'import { StopIconButton } from "ui-library"',
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
    text: '<StopIconButton',
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
  title: componentStoryPath('IconButtons/StopIconButton'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="StopIconButton"
    description="Navigation button to stop playback of pattern."
    component={
      <StopIconButton width={50} onClick={() => console.log('clicked stop')} />
    }
    componentProps={iconButtonComponentProps}
    code={usage}
  />
);

export const WithCustomColors = () => (
  <ComponentStoryWrapper
    name="StopIconButton"
    description="Navigation button to stop playback of pattern."
    subName="with custom colors"
    component={
      <StopIconButton
        width={50}
        color={'grey'}
        hoverColor={'#bada55'}
        onClick={() => console.log('clicked stop')}
      />
    }
    componentProps={iconButtonComponentProps}
    code={usage}
  />
);
