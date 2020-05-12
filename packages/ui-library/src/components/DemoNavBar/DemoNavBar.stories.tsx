import React from 'react';
import DemoNavBar from './DemoNavBar';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper, PropsTableProps } from 'storybook-helpers';

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'onLogoClick',
    propType: '() => void',
    description: 'function to call when Nog logo is clicked',
    required: true,
  },
];

export default {
  title: componentStoryPath('DemoNavBar'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="DemoNavBar"
    description="Navigation bar for the demo app, includes 'guest' profile."
    component={
      <DemoNavBar onLogoClick={(): void => console.log('logo clicked')} />
    }
    componentProps={componentProps}
  />
);
