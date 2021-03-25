import React from 'react';
import { MobileMessage } from './MobileMessage';
import { storyPathHelper } from '../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: storyPathHelper('components/MobileMessage')
};

export const Default = () => (
  <ComponentStoryWrapper
    name="MobileMessage"
    description="Use inside a <MobileWrapper> for messaging on screens that need a width of at least 1280px."
    component={<MobileMessage />}
  />
);
