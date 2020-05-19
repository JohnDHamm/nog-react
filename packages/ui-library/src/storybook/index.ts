import { PropsTableProps } from 'storybook-helpers';

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
