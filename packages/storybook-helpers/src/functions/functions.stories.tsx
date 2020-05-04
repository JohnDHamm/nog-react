import React from 'react';
import { storybookHelpersStoryPath } from './index';
import {
  StoryFunctionTitle,
  StorySectionTitle,
  StoryNotes,
  StoryCodeBlock,
  StoryCodeLineProps
} from '../../src/index';

const usageCode: Array<StoryCodeLineProps> = [
  {
    text: 'storybookHelpersStoryPath("somePath");'
  },
  {
    text: '// "storybook-helpers/somePath"',
    format: 'comment'
  }
];

export default {
  title: storybookHelpersStoryPath('functions')
};

export const StorybookHelperStoryPath = () => (
  <>
    <StoryFunctionTitle name="storybookHelpersStoryPath" args="path: string;" />
    <StoryNotes notes="Given a pathname, returns a story path for storybook-helpers." />
    <StorySectionTitle title="Usage" />
    <StoryCodeBlock code={usageCode} />
  </>
);

StorybookHelperStoryPath.story = {
  name: 'storybookHelperStoryPath()'
};
