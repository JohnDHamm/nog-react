import React from 'react';
import StoryCodeBlock, { StoryCodeLineProps } from './StoryCodeBlock';
import { PropsTableProps } from '../StoryPropsTable/StoryPropsTable';
import ComponentStoryWrapper from '../ComponentStoryWrapper/ComponentStoryWrapper';
import StoryPropsTable from '../StoryPropsTable/StoryPropsTable';
import { storybookHelpersStoryPath } from '../../functions';

const exampleCode: Array<StoryCodeLineProps> = [
  {
    text: '// a comment, followed by a blank line',
    format: 'comment'
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: 'line of code'
  },
  {
    text: 'indented line of code',
    indent: true
  }
];

const usageCode: Array<StoryCodeLineProps> = [
  {
    text: 'import { StoryCodeBlock } from "storybook-helpers";'
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: 'const exampleCode: Array<StoryCodeLineProps> = ['
  },
  {
    text:
      '{ text: "// a comment followed by a blank line", format: "comment" },',
    indent: true
  },
  {
    text: '{ text: "", format: "blank" },',
    indent: true
  },
  {
    text: '{ text: "line of code" },',
    indent: true
  },
  {
    text: '{ text: "indented line of code", indent: true }',
    indent: true
  },
  {
    text: '];'
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: '<StoryCodeBlock code={exampleCode} />'
  }
];

const storyCodeBlockProps: Array<PropsTableProps> = [
  {
    propName: 'code',
    propType: 'Array<StoryCodeLineProps>',
    description: '',
    required: true
  }
];

const storyCodeLineProps: Array<PropsTableProps> = [
  {
    propName: 'text',
    propType: 'string',
    description: 'text for the line of code',
    required: true
  },
  {
    propName: 'format',
    propType: '"code"(default) | "comment" | "blank"',
    description: '',
    required: false
  },
  {
    propName: 'indent',
    propType: 'boolean (default is false)',
    description: 'indents the line 1 tab',
    required: false
  }
];

export default {
  title: storybookHelpersStoryPath('StoryCodeBlock')
};

export const Default: React.FC = () => (
  <>
    <ComponentStoryWrapper
      name="StoryCodeBlock"
      description="Displays a block of code."
      component={<StoryCodeBlock code={exampleCode} />}
      code={usageCode}
      componentProps={storyCodeBlockProps}
    />
    <StoryPropsTable
      componentProps={storyCodeLineProps}
      title="StoryCodeLineProps"
    />
  </>
);
