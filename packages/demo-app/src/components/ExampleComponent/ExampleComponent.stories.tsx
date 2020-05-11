import React from 'react';
import ExampleComponent from './ExampleComponent';
import { ComponentStoryWrapper } from 'storybook-helpers';
import { storyPathHelper } from '../../storybook';

export default {
  title: `${storyPathHelper('components')}/ExampleComponent`
};

export const Default = () => (
  <ComponentStoryWrapper
    name="ExampleComponent"
    description="An example component to build the demo-app storybook"
    component={<ExampleComponent>ExampleComponent</ExampleComponent>}
  />
);
