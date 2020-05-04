import React from 'react';
import StoryPropsTable, { PropsTableProps } from './StoryPropsTable';
import { StoryCodeLineProps } from '../StoryCodeBlock/StoryCodeBlock';
import ComponentStoryWrapper from '../ComponentStoryWrapper/ComponentStoryWrapper';
import { storybookHelpersStoryPath } from '../../functions';

const usageCode: Array<StoryCodeLineProps> = [
  {
    text: 'import { StoryPropsTable } from "storybook-helpers";'
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: 'const componentProps: Array<PropsTableProps> = [{'
  },
  {
    text: 'propName: "firstProp"',
    indent: true
  },
  {
    text: 'propType: "string"',
    indent: true
  },
  {
    text: 'description: "some description"',
    indent: true
  },
  {
    text: 'required: true',
    indent: true
  },
  {
    text: '}, { ... }];'
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: '<StoryPropsTable componentProps={componentProps} />'
  }
];

const exampleProps: Array<PropsTableProps> = [
  {
    propName: 'firstProp',
    propType: 'string',
    description: 'some description',
    required: true
  },
  {
    propName: 'secondProp',
    propType: 'boolean',
    description: '',
    required: false
  }
];

const tableProps: Array<PropsTableProps> = [
  {
    propName: 'componentProps',
    propType: 'Array<PropsTableProps>',
    description: '',
    required: true
  },
  {
    propName: 'title',
    propType: 'string (default === "Props")',
    description: 'Use for an alternate title for the table',
    required: false
  }
];

const propsTableProps: Array<PropsTableProps> = [
  {
    propName: 'propName',
    propType: 'string',
    description: '',
    required: true
  },
  {
    propName: 'propType',
    propType: 'string',
    description: '',
    required: true
  },
  {
    propName: 'description',
    propType: 'string',
    description: '',
    required: true
  },
  {
    propName: 'required',
    propType: 'boolean',
    description: '',
    required: true
  }
];

export default {
  title: storybookHelpersStoryPath('StoryPropsTable'),
  component: StoryPropsTable
};

export const Default: React.FC = () => (
  <>
    <ComponentStoryWrapper
      name="StoryPropsTable"
      description="Displays a table of props for the component"
      component={<StoryPropsTable componentProps={exampleProps} />}
      code={usageCode}
      componentProps={tableProps}
    />
    <StoryPropsTable componentProps={propsTableProps} title="PropsTableProps" />
  </>
);

export const alternateTitle: React.FC = () => (
  <>
    <ComponentStoryWrapper
      name="StoryPropsTable"
      subName="alternate title"
      description="Displays a table of props for the component"
      component={
        <StoryPropsTable
          componentProps={exampleProps}
          title="Alternate Props Table Title"
        />
      }
      code={usageCode}
      componentProps={tableProps}
    />
    <StoryPropsTable componentProps={propsTableProps} title="PropsTableProps" />
  </>
);
