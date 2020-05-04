import React from 'react';
import StoryNotes from './StoryNotes';
import { StoryCodeLineProps } from '../StoryCodeBlock/StoryCodeBlock';
import { PropsTableProps } from '../StoryPropsTable/StoryPropsTable';
import ComponentStoryWrapper from '../ComponentStoryWrapper/ComponentStoryWrapper';
import { storybookHelpersStoryPath } from '../../functions';

const usageCode: Array<StoryCodeLineProps> = [
  {
    text: 'import { StoryNotes } from "storybook-helpers";'
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: '<StoryNotes notes="This is a an example of story notes." />'
  }
];

const storyNotesProps: Array<PropsTableProps> = [
  {
    propName: 'notes',
    propType: 'string',
    description: 'text for the notes',
    required: true
  }
];

export default {
  title: storybookHelpersStoryPath('StoryNotes'),
  component: StoryNotes
};

export const Default: React.FC = () => (
  <ComponentStoryWrapper
    name="StoryNotes"
    description="Used for any descriptions or notes."
    component={<StoryNotes notes="This is a an example of story notes." />}
    code={usageCode}
    componentProps={storyNotesProps}
  />
);
