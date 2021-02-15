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
    text:
      '<NogLogo hasBackground={false} borderColor="navy" lettersColor="gold" />',
    indent: true,
  },
  {
    text: '</div>',
  },
];

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'backgroundColor',
    propType: 'string',
    description: 'background color - default: {COLORS.WHITE}',
    required: false,
  },
  {
    propName: 'borderColor',
    propType: 'string',
    description: 'border color - default: {COLORS.NOG_GREEN}',
    required: false,
  },
  {
    propName: 'hasBackground',
    propType: 'boolean',
    description: 'use for transparent bg - default: true',
    required: false,
  },
  {
    propName: 'lettersColor',
    propType: 'string',
    description: 'letters color - default: {COLORS.NOG_RED + COLORS.NOG_GREEN}',
    required: false,
  },
];

const ComponentWrapper: React.FC = ({ children }) => (
  <div style={{ width: '200px', backgroundColor: '#777', padding: '2rem' }}>
    {children}
  </div>
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
    subName="custom colors"
    description="SVG component."
    component={
      <ComponentWrapper>
        <NogLogo hasBackground={false} borderColor="navy" lettersColor="gold" />
      </ComponentWrapper>
    }
    componentProps={componentProps}
    notes="Wrap this component in a component with a defined width."
    code={usage}
  />
);
