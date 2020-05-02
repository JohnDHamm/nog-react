import React from 'react';
import { FONTS } from './index';
import {
  StoryCodeBlock,
  StoryCodeLineProps,
  StorySectionTitle,
  StoryTitle,
  StoryNotes
} from 'storybook-helpers';

const usageText: Array<StoryCodeLineProps> = [
  {
    text: '// use in a styled-component:',
    format: 'comment'
  },
  {
    text: "import { FONTS } from 'design-system';"
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: '// css',
    format: 'comment'
  },
  {
    // eslint-disable-next-line no-template-curly-in-string
    text: 'fontFamily: ${FONTS.SECONDARY};',
    indent: true
  }
];

export default {
  title: 'design-system/fonts'
};

export const Default = () => (
  <>
    <StoryTitle title="FONTS" />
    <StoryNotes notes="This is a placeholder story for FONTS" />
    <p style={{ fontFamily: FONTS.PRIMARY }}>FONTS.PRIMARY - {FONTS.PRIMARY}</p>
    <p style={{ fontFamily: FONTS.SECONDARY }}>
      FONTS.SECONDARY - {FONTS.SECONDARY}
    </p>
    <StorySectionTitle title="Usage" />
    <StoryCodeBlock code={usageText} />
  </>
);

Default.story = {
  name: 'FONTS'
};
