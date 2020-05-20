import React from 'react';
import NogLogo from './NogLogo';
import { ComponentStoryWrapper, PropsTableProps } from 'storybook-helpers';
import { componentStoryPath } from '../../storybook';

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'borderColor',
    propType: 'string',
    description:
      'border color (hexadecimal format) - default: {COLORS.NOG_RED}',
    required: false,
  },
  {
    propName: 'lettersColor',
    propType: 'string',
    description:
      'letters color (hexadecimal format) - default: {COLORS.NOG_GREEN}',
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
  />
);
