import React from 'react';
import TestComponent from './TestComponent';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper, PropsTableProps } from 'storybook-helpers';

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'text',
    propType: 'string',
    description: 'the text that will display inside the component',
    required: true,
  },
  {
    propName: 'altStyle',
    propType: 'boolean',
    description: 'include for the alternate styling of the component',
    required: false,
  },
];

export default {
  title: componentStoryPath('TestComponent'),
  component: TestComponent,
};

export const Default = () =>
  ComponentStoryWrapper({
    name: 'TestComponent',
    description:
      'This is a description for the TestComponent for building Storybook for the ui-library.',
    component: <TestComponent text="This is a test." />,
    notes: 'This is a note for the component.',
    componentProps: componentProps,
  });

export const AlternateStyle = () =>
  ComponentStoryWrapper({
    name: 'TestComponent',
    subName: 'alternate style',
    component: <TestComponent text="This has alternate styling." altStyle />,
    componentProps: componentProps,
  });
