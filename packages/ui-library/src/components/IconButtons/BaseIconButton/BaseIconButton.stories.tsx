import React from 'react';
import BaseIconButton from './BaseIconButton';
import {
  ComponentStoryWrapper,
  PropsTableProps,
  StoryCodeLineProps,
} from 'storybook-helpers';
import { componentStoryPath } from '../../../storybook';

const usage: StoryCodeLineProps[] = [
  {
    text: 'import BaseIconButton from "{path to BaseIconButton.tsx}"',
  },
  {
    text: '',
    format: 'blank',
  },
  {
    text:
      'const SomeIconButton: React.FC<IconButtonProps> = ({ width, color, hoverColor, onClick }) => {',
  },
  {
    text: 'return (',
    indent: true,
  },
  {
    text: '<BaseIconButton',
    indent: true,
  },
  {
    text: 'viewbox="0 0 112.14 146.29"',
    indent: true,
  },
  {
    text: 'width={width}',
    indent: true,
  },
  {
    text: 'color={color || "#000"}',
    indent: true,
  },
  {
    text: 'hoverColor={hoverColor}',
    indent: true,
  },
  {
    text: 'onClick={onClick}',
    indent: true,
  },
  {
    text: '>',
    indent: true,
  },
  {
    text: '<polygon points="12.83 146.29 0.01 133.66 59.58 73.21" />',
    indent: true,
  },
  {
    text: '</BaseIconButton',
    indent: true,
  },
  {
    text: ');',
    indent: true,
  },
  {
    text: '};',
  },
];

const componentProps: PropsTableProps[] = [
  {
    propName: 'viewbox',
    propType: 'string',
    description: 'SVG viewBox (e.g. "0 0 124, 167")',
    required: true,
  },
  {
    propName: 'width',
    propType: 'number',
    description: 'width of button (px)',
    required: true,
  },
  {
    propName: 'color',
    propType: 'string',
    description: 'color of svg fill (hexadecimal format)',
    required: false,
  },
  {
    propName: 'hoverColor',
    propType: 'string',
    description: 'color of svg fill during cursor hover (hexadecimal format)',
    required: false,
  },
  {
    propName: 'onClick',
    propType: '() => void',
    description: 'callback for click on button',
    required: false,
  },
  {
    propName: 'children',
    propType: 'React.ReactNode',
    description: 'SVG attributes (paths, etc.)',
    required: true,
  },
];

export default {
  title: componentStoryPath('IconButtons/BaseIconButton'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="BaseIconButton"
    description="Use to build icon buttons with a single fill color that can be changed via props."
    component={
      <BaseIconButton
        viewbox="0 0 93.15 93.15"
        width={50}
        onClick={() => console.log('clicked base button')}
      >
        <path
          d="M188.21,177.9v9.36c0,2.4,0,3.82.07,4.25.24,2.16.89,3.24,1.94,3.24a10.82,10.82,0,0,0,1.8-.36,3.24,3.24,0,0,1,1.08-.14c1.83,0,2.74.79,2.74,2.37a2.14,2.14,0,0,1-.9,1.73,3.55,3.55,0,0,1-2.28.72,29.15,29.15,0,0,1-3.5-.32,27.9,27.9,0,0,0-3.51-.33,34.62,34.62,0,0,0-4.19.29,37.37,37.37,0,0,1-3.75.36c-1.93,0-2.89-.81-2.89-2.45s.82-2.37,2.47-2.37a10.17,10.17,0,0,1,1.7.21,9.4,9.4,0,0,0,1.71.22q1.74,0,2.11-4.61V171.64c-.25-3-1-4.54-2.18-4.54a8.07,8.07,0,0,0-1.64.25,7.45,7.45,0,0,1-1.56.26q-2.61,0-2.61-2.31c0-1.63,1.05-2.45,3.16-2.45a17.12,17.12,0,0,1,2,.08c1.53.19,2.52.29,2.95.29a13,13,0,0,0,1.76-.18,13.56,13.56,0,0,1,1.77-.19c1.39,0,2.09.94,2.09,2.81,0,.2,0,.48-.06.87s-.06.67-.06.86c0,.39-.08,1.87-.12,4.46Q188.21,174.81,188.21,177.9ZM184.46,159a4.06,4.06,0,0,1-4-4,3.77,3.77,0,0,1,1.19-2.81,4.09,4.09,0,0,1,5.69,0A3.77,3.77,0,0,1,188.5,155a4.06,4.06,0,0,1-4,4Z"
          transform="translate(-138.32 -129.54)"
        />
        <path
          d="M184.9,222.69a46.58,46.58,0,1,1,46.57-46.57A46.62,46.62,0,0,1,184.9,222.69Zm0-90.15a43.58,43.58,0,1,0,43.57,43.58A43.63,43.63,0,0,0,184.9,132.54Z"
          transform="translate(-138.32 -129.54)"
        />
      </BaseIconButton>
    }
    componentProps={componentProps}
    code={usage}
  />
);

export const WithCustomColors = () => (
  <ComponentStoryWrapper
    name="BaseIconButton"
    description="Use to build icon buttons with a single fill color that can be changed via props."
    subName="with custom colors"
    component={
      <BaseIconButton
        viewbox="0 0 93.15 93.15"
        width={50}
        color={'grey'}
        hoverColor={'#bada55'}
        onClick={() => console.log('clicked base button')}
      >
        <path
          d="M188.21,177.9v9.36c0,2.4,0,3.82.07,4.25.24,2.16.89,3.24,1.94,3.24a10.82,10.82,0,0,0,1.8-.36,3.24,3.24,0,0,1,1.08-.14c1.83,0,2.74.79,2.74,2.37a2.14,2.14,0,0,1-.9,1.73,3.55,3.55,0,0,1-2.28.72,29.15,29.15,0,0,1-3.5-.32,27.9,27.9,0,0,0-3.51-.33,34.62,34.62,0,0,0-4.19.29,37.37,37.37,0,0,1-3.75.36c-1.93,0-2.89-.81-2.89-2.45s.82-2.37,2.47-2.37a10.17,10.17,0,0,1,1.7.21,9.4,9.4,0,0,0,1.71.22q1.74,0,2.11-4.61V171.64c-.25-3-1-4.54-2.18-4.54a8.07,8.07,0,0,0-1.64.25,7.45,7.45,0,0,1-1.56.26q-2.61,0-2.61-2.31c0-1.63,1.05-2.45,3.16-2.45a17.12,17.12,0,0,1,2,.08c1.53.19,2.52.29,2.95.29a13,13,0,0,0,1.76-.18,13.56,13.56,0,0,1,1.77-.19c1.39,0,2.09.94,2.09,2.81,0,.2,0,.48-.06.87s-.06.67-.06.86c0,.39-.08,1.87-.12,4.46Q188.21,174.81,188.21,177.9ZM184.46,159a4.06,4.06,0,0,1-4-4,3.77,3.77,0,0,1,1.19-2.81,4.09,4.09,0,0,1,5.69,0A3.77,3.77,0,0,1,188.5,155a4.06,4.06,0,0,1-4,4Z"
          transform="translate(-138.32 -129.54)"
        />
        <path
          d="M184.9,222.69a46.58,46.58,0,1,1,46.57-46.57A46.62,46.62,0,0,1,184.9,222.69Zm0-90.15a43.58,43.58,0,1,0,43.57,43.58A43.63,43.63,0,0,0,184.9,132.54Z"
          transform="translate(-138.32 -129.54)"
        />
      </BaseIconButton>
    }
    componentProps={componentProps}
  />
);
