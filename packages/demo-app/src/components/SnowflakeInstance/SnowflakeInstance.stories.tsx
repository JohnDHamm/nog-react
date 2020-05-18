import React from 'react';
import SnowflakeInstance from './SnowflakeInstance';
import { storyPathHelper } from '../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';
import { PropsTableProps } from 'storybook-helpers/dist/components/StoryPropsTable/StoryPropsTable';

export default {
  title: storyPathHelper('components/SnowflakeInstance')
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
    '#000000'
  ],
  instanceSize: 400,
  onLightClick: (lightNum: number) =>
    console.log('light num', lightNum, 'clicked')
};

const ComponentWrapper: React.FC = ({ children }) => (
  <div style={{ padding: '2rem', backgroundColor: '#1a1a1a' }}>{children}</div>
);

const componentProps: PropsTableProps[] = [
  {
    propName: 'instanceNum',
    propType: 'number',
    description: 'index of instance (starts at 0) - used for label',
    required: true
  },
  {
    propName: 'instanceSize',
    propType: 'number',
    description: 'used for width (px)',
    required: true
  },
  {
    propName: 'instanceType',
    propType: '"current" | "other"',
    description: '',
    required: true
  },
  {
    propName: 'lightsColors',
    propType: 'Array<string>',
    description: 'Colors for the lights (hexadecimal format)',
    required: true
  },
  {
    propName: 'onLightClick',
    propType: '(lightNum: number) => void',
    description: 'callback for clicking on a light in the instance',
    required: true
  }
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
  />
);

export const Other = () => (
  <ComponentStoryWrapper
    name="SnowflakeInstance"
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
  />
);
