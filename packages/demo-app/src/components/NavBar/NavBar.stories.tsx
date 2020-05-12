import React from 'react';
import NavBar from './NavBar';
import { storyPathHelper } from '../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: storyPathHelper('components/NavBar')
};

export const Default = () => (
  <ComponentStoryWrapper
    name="NavBar"
    description="Navigation bar for the demo app, includes 'guest' profile."
    component={<NavBar />}
    notes="built-in redirect to '/' when clicking the logo"
  />
);
