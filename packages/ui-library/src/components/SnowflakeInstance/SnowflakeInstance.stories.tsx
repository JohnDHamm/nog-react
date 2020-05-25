import React from 'react';
import SnowflakeInstance from './SnowflakeInstance';
import { componentStoryPath } from '../../storybook';
import {
  ComponentStoryWrapper,
  PropsTableProps,
  StoryCodeLineProps,
} from 'storybook-helpers';

const usage: StoryCodeLineProps[] = [
  {
    text: 'import { SnowflakeInstance } from "ui-library";',
  },
  {
    text: '',
    format: 'blank',
  },
  {
    text: '<SnowflakeInstance',
  },
  {
    text: 'instanceNum={0}',
    indent: true,
  },
  {
    text: 'instanceSize={400}',
    indent: true,
  },
  {
    text: 'instanceType="current"',
    indent: true,
  },
  {
    text: 'lightsColors={lightsColors}',
    indent: true,
  },
  {
    text: 'onLightClick={lightNum => handleLightClick(lightNum)}',
    indent: true,
  },
  {
    text: '/>',
  },
];

export default {
  title: componentStoryPath('SnowflakeInstance'),
};

const baseProps = {
  instanceNum: 0,
  lightsColors: [
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
    '#ff0000',
    '#000000',
  ],
  instanceSize: 348,
  onLightClick: (lightNum: number) =>
    console.log('light num', lightNum, 'clicked'),
};

const ComponentWrapper: React.FC = ({ children }) => (
  <div style={{ padding: '2rem', backgroundColor: '#1a1a1a' }}>{children}</div>
);

const componentProps: PropsTableProps[] = [
  {
    propName: 'instanceNum',
    propType: 'number',
    description: 'index of instance (starts at 0) - used for label',
    required: true,
  },
  {
    propName: 'instanceSize',
    propType: 'number',
    description: 'used for width (px)',
    required: true,
  },
  {
    propName: 'instanceType',
    propType: '"current" | "other"',
    description: '',
    required: true,
  },
  {
    propName: 'lightsColors',
    propType: 'Array<string>',
    description: 'Colors for the lights (hexadecimal format)',
    required: true,
  },
  {
    propName: 'onLightClick',
    propType: '(lightNum: number) => void',
    description: 'callback for clicking on a light in the instance',
    required: true,
  },
];

export const Current = () => (
  <ComponentStoryWrapper
    name="SnowflakeInstance"
    component={
      <ComponentWrapper>
        <SnowflakeInstance {...baseProps} instanceType="current" />
      </ComponentWrapper>
    }
    componentProps={componentProps}
    code={usage}
  />
);

export const Other = () => (
  <ComponentStoryWrapper
    name="SnowflakeInstance"
    subName="other"
    component={
      <ComponentWrapper>
        <SnowflakeInstance
          {...baseProps}
          instanceSize={200}
          instanceType="other"
        />
      </ComponentWrapper>
    }
    componentProps={componentProps}
    code={usage}
  />
);

export const Playback = () => (
  <ComponentStoryWrapper
    name="SnowflakeInstance"
    subName="playback"
    component={
      <ComponentWrapper>
        <SnowflakeInstance
          {...baseProps}
          instanceSize={200}
          instanceType="playback"
        />
      </ComponentWrapper>
    }
    componentProps={componentProps}
    code={usage}
  />
);
