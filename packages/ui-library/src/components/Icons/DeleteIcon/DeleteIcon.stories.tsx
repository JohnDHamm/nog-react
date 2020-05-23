import React from 'react';
import DeleteIcon from './DeleteIcon';
import {
  componentStoryPath,
  IconComponentProps,
  IconComponentWrapper,
  IconUsage,
} from '../../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: componentStoryPath('Icons/DeleteIcon'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="DeleteIcon"
    component={
      <IconComponentWrapper>
        <DeleteIcon />
      </IconComponentWrapper>
    }
    componentProps={IconComponentProps}
    code={IconUsage('DeleteIcon')}
  />
);

export const CustomColors = () => (
  <ComponentStoryWrapper
    name="DeleteIcon"
    subName="custom colors"
    component={
      <IconComponentWrapper>
        <DeleteIcon color="grey" hoverColor="gold" />
      </IconComponentWrapper>
    }
    componentProps={IconComponentProps}
    code={IconUsage('DeleteIcon')}
  />
);
