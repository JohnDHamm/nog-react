import React from 'react';
import NogLogo from './NogLogo';
import {
  ComponentStoryWrapper,
  PropsTableProps,
  StoryCodeLineProps,
} from 'storybook-helpers';
import { componentStoryPath } from '../../storybook';

const usage: StoryCodeLineProps[] = [
  {
    text: 'import { NogLogo } from "ui-library";',
  },
  {
    text: '',
    format: 'blank',
  },
  {
    text: '<div style={{ width: "100px" }} >',
  },
  {
    text: '<NogLogo borderColor="navy" lettersColor="gold" />',
    indent: true,
  },
  {
    text: '</div>',
  },
];

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'borderColor',
    propType: 'string',
    description: 'border color - default: {COLORS.NOG_RED}',
    required: false,
  },
  {
    propName: 'lettersColor',
    propType: 'string',
    description: 'letters color - default: {COLORS.NOG_GREEN}',
    required: false,
  },
];

const ComponentWrapper: React.FC = ({ children }) => (
  <div style={{ width: '200px' }}>{children}</div>
);

export default {
  title: componentStoryPath('NogLogo'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="NogLogo"
    description="SVG component."
    component={
      <ComponentWrapper>
        <NogLogo />
      </ComponentWrapper>
    }
    componentProps={componentProps}
    notes="Wrap this component in a component with a defined width."
    code={usage}
  />
);

export const CustomColors = () => (
  <ComponentStoryWrapper
    name="NogLogo"
    description="SVG component."
    component={
      <ComponentWrapper>
        <NogLogo borderColor="navy" lettersColor="gold" />
      </ComponentWrapper>
    }
    componentProps={componentProps}
    notes="Wrap this component in a component with a defined width."
    code={usage}
  />
);
