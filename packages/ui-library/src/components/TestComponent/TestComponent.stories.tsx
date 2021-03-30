import React from 'react';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';
import TestComponent from './TestComponent';

export default {
  title: componentStoryPath('TestComponent'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="TestComponent"
    description="testing global types in monorepo"
    component={<TestComponent />}
    componentProps={[]}
  />
);
