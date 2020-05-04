import React from 'react';
import StoryFunctionTitle from './StoryFunctionTitle';
import { StoryCodeLineProps } from '../StoryCodeBlock/StoryCodeBlock';
import { PropsTableProps } from '../StoryPropsTable/StoryPropsTable';
import ComponentStoryWrapper from '../ComponentStoryWrapper/ComponentStoryWrapper';
import { storybookHelpersStoryPath } from '../../functions';

const usageCodeBase: Array<StoryCodeLineProps> = [
  {
    text: 'import { StoryFunctionTitle } from "storybook-helpers";'
  },
  {
    text: '',
    format: 'blank'
  }
];

const defaultUsage: Array<StoryCodeLineProps> = Array.from(usageCodeBase);
const withArgsUsage: Array<StoryCodeLineProps> = Array.from(usageCodeBase);

defaultUsage.push({
  text: '<StoryFunctionTitle name="someFunction" />'
});

withArgsUsage.push({
  text:
    '<StoryFunctionTitle name="someFunction" args="foo: string;, bar: number;" />'
});

const storyNotesProps: Array<PropsTableProps> = [
  {
    propName: 'name',
    propType: 'string',
    description: 'function name',
    required: true
  },
  {
    propName: 'args',
    propType: 'string',
    description: 'list of arguments',
    required: false
  }
];

export default {
  title: storybookHelpersStoryPath('StoryFunctionTitle'),
  component: StoryFunctionTitle
};

export const Default: React.FC = () => (
  <ComponentStoryWrapper
    name="StoryFunctionTitle"
    description="Used for function story titles."
    component={<StoryFunctionTitle name="someFunction" />}
    code={defaultUsage}
    componentProps={storyNotesProps}
  />
);

export const withArguments: React.FC = () => (
  <ComponentStoryWrapper
    name="StoryFunctionTitle"
    subName="with arguments"
    description="Used for function story titles with arguments."
    component={
      <StoryFunctionTitle
        name="someFunction"
        args="foo: string;, bar: number;"
      />
    }
    code={withArgsUsage}
    componentProps={storyNotesProps}
  />
);
