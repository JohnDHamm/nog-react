import React from 'react';
import StorySectionTitle from './StorySectionTitle';
import { StoryCodeLineProps } from '../StoryCodeBlock/StoryCodeBlock';
import { PropsTableProps } from '../StoryPropsTable/StoryPropsTable';
import ComponentStoryWrapper from '../ComponentStoryWrapper/ComponentStoryWrapper';
import { storybookHelpersStoryPath } from '../../functions';

const usageCode: Array<StoryCodeLineProps> = [
  {
    text: 'import { StorySectionTitle } from "storybook-helpers";'
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: '<StoryTitle title="This is a Story Section Title." />'
  }
];

const storyTitleProps: Array<PropsTableProps> = [
  {
    propName: 'title',
    propType: 'string',
    description: 'text for the title',
    required: true
  }
];

export default {
  title: storybookHelpersStoryPath('StorySectionTitle'),
  component: StorySectionTitle
};

export const Default: React.FC = () => (
  <ComponentStoryWrapper
    name="StorySectionTitle"
    description="Used for the title of a storybook story section"
    component={<StorySectionTitle title="This is a Story Section Title." />}
    code={usageCode}
    componentProps={storyTitleProps}
  />
);
