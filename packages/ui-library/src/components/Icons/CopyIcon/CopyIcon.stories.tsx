import React from 'react';
import CopyIcon from './CopyIcon';
import {
  componentStoryPath,
  IconComponentProps,
  IconComponentWrapper,
  IconUsage,
} from '../../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: componentStoryPath('Icons/CopyIcon'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="CopyIcon"
    component={
      <IconComponentWrapper>
        <CopyIcon />
      </IconComponentWrapper>
    }
    componentProps={IconComponentProps}
    notes="To utilize hoverColor on all paths of this component at same time, you must apply a hover style to the parent. (see ToolButton)"
    code={IconUsage('CopyIcon')}
  />
);

export const CustomColors = () => (
  <ComponentStoryWrapper
    name="CopyIcon"
    subName="custom colors"
    component={
      <IconComponentWrapper>
        <CopyIcon color="grey" hoverColor="gold" />
      </IconComponentWrapper>
    }
    componentProps={IconComponentProps}
    notes="To utilize hoverColor on all paths of this component at same time, you must apply a hover style to the parent. (see ToolButton)"
    code={IconUsage('CopyIcon')}
  />
);
