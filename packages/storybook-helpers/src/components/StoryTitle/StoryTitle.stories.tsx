import React from 'react';
import StoryTitle from './StoryTitle';
import { StoryCodeLineProps } from '../StoryCodeBlock/StoryCodeBlock';
import { PropsTableProps } from '../StoryPropsTable/StoryPropsTable';
import ComponentStoryWrapper from '../ComponentStoryWrapper/ComponentStoryWrapper';
import { storybookHelpersStoryPath } from '../../functions';

const usageCodeBase: Array<StoryCodeLineProps> = [
  {
    text: 'import { StoryTitle } from "storybook-helpers";'
  },
  {
    text: '',
    format: 'blank'
  }
];

const defaultUsageCode = Array.from(usageCodeBase);
const subTitleUsageCode = Array.from(usageCodeBase);

defaultUsageCode.push({
  text: '<StoryTitle title="This is a Story Title." />'
});

subTitleUsageCode.push({
  text: '<StoryTitle title="This is a Story Title." subTitle="with subtitle" />'
});

const storyTitleProps: Array<PropsTableProps> = [
  {
    propName: 'title',
    propType: 'string',
    description: 'text for the title',
    required: true
  },
  {
    propName: 'subTitle',
    propType: 'string',
    description: 'the story sub title',
    required: false
  }
];

export default {
  title: storybookHelpersStoryPath('StoryTitle'),
  component: StoryTitle
};

export const Default: React.FC = () => (
  <ComponentStoryWrapper
    name="StoryTitle"
    description="Used for the title of a storybook story"
    component={<StoryTitle title="This is a Story Title." />}
    code={defaultUsageCode}
    componentProps={storyTitleProps}
  />
);

export const WithSubtitle: React.FC = () => (
  <ComponentStoryWrapper
    name="StoryTitle"
    subName="with subtitle"
    description="Used for the title of a storybook story"
    component={
      <StoryTitle title="This is a Story Title." subtitle="with subtitle" />
    }
    code={subTitleUsageCode}
    componentProps={storyTitleProps}
  />
);
