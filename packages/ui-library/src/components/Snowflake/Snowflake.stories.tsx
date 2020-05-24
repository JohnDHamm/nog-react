import React from 'react';
import Snowflake from './Snowflake';
import {
  ComponentStoryWrapper,
  PropsTableProps,
  StoryCodeLineProps,
} from 'storybook-helpers';
import { componentStoryPath } from '../../storybook';

const usage: StoryCodeLineProps[] = [
  {
    text: 'import { Snowflake } from "ui-library";',
  },
  {
    text: '',
    format: 'blank',
  },
  {
    text: '<div style={{ width: "400px" }} >',
  },
  {
    text:
      '<Snowflake outerBorderColor="grey" innerBorderColor="navy" innerColor="#bada55" />',
    indent: true,
  },
  {
    text: '</div>',
  },
];

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'innerColor',
    propType: 'string',
    description: 'inner color',
    required: true,
  },
  {
    propName: 'innerBorderColor',
    propType: 'string',
    description: 'inner border color',
    required: true,
  },
  {
    propName: 'outerBorderColor',
    propType: 'string',
    description: 'outer border color',
    required: true,
  },
];

const ComponentWrapper: React.FC = ({ children }) => (
  <div style={{ width: '400px' }}>{children}</div>
);

export default {
  title: componentStoryPath('Snowflake'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="Snowflake"
    description="SVG component."
    component={
      <ComponentWrapper>
        <Snowflake
          outerBorderColor="grey"
          innerBorderColor="navy"
          innerColor="#bada55"
        />
      </ComponentWrapper>
    }
    componentProps={componentProps}
    notes="Wrap this component in a component with a defined width."
    code={usage}
  />
);
