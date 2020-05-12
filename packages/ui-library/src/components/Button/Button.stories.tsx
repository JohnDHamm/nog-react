import React from 'react';
import Button from './Button';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper, PropsTableProps } from 'storybook-helpers';

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'onClick',
    propType: '() => void;',
    description: 'function to call on button click',
    required: true,
  },
];
export default {
  title: componentStoryPath('Button'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="Button"
    description="A button"
    component={
      <Button onClick={() => console.log('button clicked')}>button</Button>
    }
    componentProps={componentProps}
  />
);
