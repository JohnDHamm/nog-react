import React from 'react';
import PasteIcon from './PasteIcon';
import {
  componentStoryPath,
  IconComponentProps,
  IconComponentWrapper,
  IconUsage,
} from '../../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';

export default {
  title: componentStoryPath('Icons/PasteIcon'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="PasteIcon"
    component={
      <IconComponentWrapper>
        <PasteIcon />
      </IconComponentWrapper>
    }
    componentProps={IconComponentProps}
    notes="To utilize hoverColor on all paths of this component at same time, you must apply a hover style to the parent. (see ToolButton)"
    code={IconUsage('PasteIcon')}
  />
);

export const CustomColors = () => (
  <ComponentStoryWrapper
    name="PasteIcon"
    subName="custom colors"
    component={
      <IconComponentWrapper>
        <PasteIcon color="grey" hoverColor="gold" />
      </IconComponentWrapper>
    }
    componentProps={IconComponentProps}
    notes="To utilize hoverColor on all paths of this component at same time, you must apply a hover style to the parent. (see ToolButton)"
    code={IconUsage('PasteIcon')}
  />
);
