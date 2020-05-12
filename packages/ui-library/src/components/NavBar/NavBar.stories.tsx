import React from 'react';
import NavBar from './NavBar';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: componentStoryPath('NavBar'),
};

export const Default = () => (
  <ComponentStoryWrapper name="NavBar" component={<NavBar />} />
);
