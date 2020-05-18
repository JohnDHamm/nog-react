import React from 'react';
import SnowflakeInstance from './SnowflakeInstance';
import { storyPathHelper } from '../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';

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

export const Current = () => (
  <ComponentStoryWrapper
    name="SnowflakeInstance"
    component={
      <div style={{ padding: '2rem', backgroundColor: '#1a1a1a' }}>
        <SnowflakeInstance {...baseProps} instanceType="current" />
      </div>
    }
  />
);

export const Other = () => (
  <ComponentStoryWrapper
    name="SnowflakeInstance"
    component={
      <SnowflakeInstance
        {...baseProps}
        instanceSize={200}
        instanceType="other"
      />
    }
  />
);
