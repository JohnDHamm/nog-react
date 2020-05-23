import React from 'react';
import AddIcon from './AddIcon';
import {
  componentStoryPath,
  IconComponentProps,
  IconComponentWrapper,
  IconUsage,
} from '../../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: componentStoryPath('Icons/AddIcon'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="AddIcon"
    component={
      <IconComponentWrapper>
        <AddIcon />
      </IconComponentWrapper>
    }
    componentProps={IconComponentProps}
    code={IconUsage('AddIcon')}
  />
);

export const CustomColors = () => (
  <ComponentStoryWrapper
    name="AddIcon"
    subName="custom colors"
    component={
      <IconComponentWrapper>
        <AddIcon color="grey" hoverColor="gold" />
      </IconComponentWrapper>
    }
    componentProps={IconComponentProps}
    code={IconUsage('AddIcon')}
  />
);
