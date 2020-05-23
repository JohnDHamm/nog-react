import IconComponentWrapper from './IconComponentWrapper';

import { PropsTableProps, StoryCodeLineProps } from 'storybook-helpers';

export const componentStoryPath = (path: string): string =>
  `components/${path}`;

export const iconButtonComponentProps: PropsTableProps[] = [
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
];

export const IconComponentProps: PropsTableProps[] = [
  {
    propName: 'color',
    propType: 'string',
    description: 'main fill color - default: {COLORS.BLACK}',
    required: false,
  },
  {
    propName: 'hoverColor',
    propType: 'string',
    description: 'main fill color on hover - defaults to {color} prop',
    required: false,
  },
];

export const IconUsage = (iconName: string): StoryCodeLineProps[] => [
  {
    text: `import { ${iconName} } from "ui-library";`,
  },
  {
    text: '',
    format: 'blank',
  },
  {
    text: '<div style={{ width: "40px" }} >',
  },
  {
    text: `<${iconName} color="grey" hoverColor="gold" />`,
    indent: true,
  },
  {
    text: '</div>',
  },
];

export { IconComponentWrapper };
