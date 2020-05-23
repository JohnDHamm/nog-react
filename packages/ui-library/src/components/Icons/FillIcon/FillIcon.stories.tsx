import React from 'react';
import FillIcon from './FillIcon';
import {
  componentStoryPath,
  IconComponentProps,
  IconComponentWrapper,
  IconUsage,
} from '../../../storybook';
import { ComponentStoryWrapper } from 'storybook-helpers';
import { COLORS } from 'design-system';

const FillIconComponentProps = Array.from(IconComponentProps);

FillIconComponentProps.push({
  propName: 'extraColor',
  propType: 'string',
  description: 'color of the circle fills - default: {COLORS.BLACK}',
  required: false,
});

const FillIconUsage = Array.from(IconUsage('FillIcon'));

FillIconUsage.splice(3, 1, {
  text: '<FillIcon color="grey" hoverColor="gold" extraColor="#bada55" />',
  indent: true,
});

export default {
  title: componentStoryPath('Icons/FillIcon'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="FillIcon"
    component={
      <IconComponentWrapper>
        <FillIcon />
      </IconComponentWrapper>
    }
    componentProps={FillIconComponentProps}
    notes="To utilize hoverColor on all paths of this component at same time, you must apply a hover style to the parent. (see ToolButton)"
    code={FillIconUsage}
  />
);

export const CustomColors = () => (
  <ComponentStoryWrapper
    name="FillIcon"
    subName="custom colors"
    component={
      <IconComponentWrapper>
        <FillIcon color="grey" hoverColor="gold" extraColor={COLORS.BADASS} />
      </IconComponentWrapper>
    }
    componentProps={FillIconComponentProps}
    notes="To utilize hoverColor on all paths of this component at same time, you must apply a hover style to the parent. (see ToolButton)"
    code={IconUsage('FillIcon')}
  />
);
