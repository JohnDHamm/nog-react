import React from 'react';
import ToolButton from './ToolButton';
import AddIcon from '../Icons/AddIcon/AddIcon';
import PasteIcon from '../Icons/PasteIcon/PasteIcon';
import { componentStoryPath } from '../../storybook';
import {
  ComponentStoryWrapper,
  StoryCodeLineProps,
  PropsTableProps,
} from 'storybook-helpers';
import { COLORS } from 'design-system';

const componentProps: PropsTableProps[] = [
  {
    propName: 'icon',
    propType: 'JSX.Element',
    description: 'icon for button',
    required: true,
  },
  {
    propName: 'iconWidth',
    propType: 'number',
    description: 'icon width (px) - defaults to 24px in styling',
    required: false,
  },
  {
    propName: 'label',
    propType: 'string',
    description: 'text for button',
    required: true,
  },
  {
    propName: 'onClick',
    propType: '() => void',
    description: 'callback for button click',
    required: true,
  },
];

const usage: StoryCodeLineProps[] = [
  {
    text: 'import { ToolButton } from "ui-library";',
  },
  {
    text: '',
    format: 'blank',
  },
  {
    text: '<ToolButton',
  },
  {
    text: 'icon={<PasteIcon />}',
    indent: true,
  },
  {
    text: 'iconWidth={48}',
    indent: true,
  },
  {
    text: 'label="paste"',
    indent: true,
  },
  {
    text: 'onClick={() => handlePasteClick()}',
    indent: true,
  },
  {
    text: '/>',
  },
];

export default {
  title: componentStoryPath('ToolButton'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="ToolButton"
    component={
      <div style={{ backgroundColor: COLORS.BACKGROUND_GREY, padding: '2rem' }}>
        <ToolButton
          icon={<AddIcon />}
          label="add"
          onClick={() => console.log('clicked tool button')}
        />
      </div>
    }
    componentProps={componentProps}
    code={usage}
  />
);

export const CustomIconWidth = () => (
  <ComponentStoryWrapper
    name="ToolButton"
    subName="custom icon width"
    component={
      <div style={{ backgroundColor: COLORS.BACKGROUND_GREY, padding: '2rem' }}>
        <ToolButton
          icon={<PasteIcon />}
          iconWidth={48}
          label="paste"
          onClick={() => console.log('clicked tool button')}
        />
      </div>
    }
    componentProps={componentProps}
    code={usage}
  />
);
