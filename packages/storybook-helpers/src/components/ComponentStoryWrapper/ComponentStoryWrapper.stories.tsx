import React from 'react';
import ComponentStoryWrapper from './ComponentStoryWrapper';
import { PropsTableProps } from '../StoryPropsTable/StoryPropsTable';
import { StoryCodeLineProps } from '../StoryCodeBlock/StoryCodeBlock';
import { storybookHelpersStoryPath } from '../../functions/index';

const usageCode: Array<StoryCodeLineProps> = [
  {
    text: '// in a *.stories.tsx',
    format: 'comment'
  },
  {
    text: 'import { ComponentStoryWrapper } from "storybook-helpers";'
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: 'export const Default: React.FC = () => (<ComponentStoryWrapper'
  },
  {
    text: 'name="ComponentName"',
    indent: true
  },
  {
    text: 'subName="alternate story"',
    indent: true
  },
  {
    text: 'name="ComponentName"',
    indent: true
  },
  {
    text: 'description="This component description"',
    indent: true
  },
  {
    text: 'component={<MyComponent />}',
    indent: true
  },
  {
    text: 'notes="some notes"',
    indent: true
  },
  {
    text: 'code={exampleCode}',
    indent: true
  },
  {
    text: 'componentProps={componentProps}',
    indent: true
  },
  {
    text: '/>);'
  }
];

const wrapperProps: Array<PropsTableProps> = [
  {
    propName: 'name',
    propType: 'string',
    description: '',
    required: true
  },
  {
    propName: 'subName',
    propType: 'string',
    description: '',
    required: false
  },
  {
    propName: 'description',
    propType: 'string',
    description: '',
    required: false
  },
  {
    propName: 'component',
    propType: 'JSX.Element',
    description: '',
    required: true
  },
  {
    propName: 'notes',
    propType: 'string',
    description: '',
    required: false
  },
  {
    propName: 'componentProps',
    propType: 'Array<PropTableProps>',
    description: '',
    required: true
  },
  {
    propName: 'code',
    propType: 'Array<StoryCodeLineProps>',
    description: '',
    required: false
  }
];

export default {
  title: storybookHelpersStoryPath('ComponentStoryWrapper')
};

export const Default: React.FC = () => (
  <ComponentStoryWrapper
    name="ComponentStoryWrapper"
    description="Use this to create a formatted Component story."
    component={<></>}
    componentProps={wrapperProps}
    code={usageCode}
  />
);
