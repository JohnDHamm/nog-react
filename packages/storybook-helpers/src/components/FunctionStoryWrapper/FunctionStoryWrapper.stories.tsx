import React from 'react';
// import FunctionStoryWrapper from './FunctionStoryWrapper';
import ComponentStoryWrapper from '../ComponentStoryWrapper/ComponentStoryWrapper';
import { PropsTableProps } from '../StoryPropsTable/StoryPropsTable';
import { StoryCodeLineProps } from '../StoryCodeBlock/StoryCodeBlock';
import { storybookHelpersStoryPath } from '../../functions/index';

const usageCode: Array<StoryCodeLineProps> = [
  {
    text: '// in a *.stories.tsx',
    format: 'comment'
  },
  {
    text: 'import { FunctionStoryWrapper } from "storybook-helpers";'
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: 'export const Default: React.FC = () => (<FunctionStoryWrapper'
  },
  {
    text: 'name="functionName"',
    indent: true
  },
  {
    text: 'args="someArg: string;"',
    indent: true
  },
  {
    text: 'description="This function description"',
    indent: true
  },
  {
    text: 'notes="some notes"',
    indent: true
  },
  {
    text: 'usage={exampleCode}',
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
    propName: 'args',
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
    propName: 'notes',
    propType: 'string',
    description: '',
    required: false
  },
  {
    propName: 'usage',
    propType: 'Array<StoryCodeLineProps>',
    description: '',
    required: false
  }
];

export default {
  title: storybookHelpersStoryPath('FunctionStoryWrapper')
};

export const Default: React.FC = () => (
  <ComponentStoryWrapper
    name="FunctionStoryWrapper"
    description="Use this to create a formatted function story."
    component={<></>}
    componentProps={wrapperProps}
    code={usageCode}
  />
);
