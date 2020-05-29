import React from 'react';
import MobileWrapper from './MobileWrapper';
import {
  StoryCodeBlock,
  StoryCodeLineProps,
  StoryNotes,
  StorySectionTitle,
  StoryTitle
} from 'storybook-helpers';

const usageText: Array<StoryCodeLineProps> = [
  {
    text: "import { MobileWrapper } from 'design-system';"
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: '<MobileWrapper>'
  },
  {
    text: '<div>A child element</div>',
    indent: true
  },
  {
    text: '<div>Another child element</div>',
    indent: true
  },
  {
    text: '</MobileWrapper>'
  }
];

export default {
  title: 'design-system/layout/MobileWrapper',
  component: MobileWrapper
};

export const Default = () => (
  <>
    <StoryTitle title="MobileWrapper" />
    <StoryNotes notes="The children of a MobileWrapper component are only visible at mobile screen width (less than 1280px). (resize window to test)" />
    <MobileWrapper>
      <div
        style={{
          border: '2px solid green',
          padding: '1rem',
          textAlign: 'center',
          marginTop: '3rem'
        }}
      >
        This is a child of a MobileWrapper.
      </div>
    </MobileWrapper>
    <div style={{ height: '3rem' }} />
    <StorySectionTitle title="Usage" />
    <StoryCodeBlock code={usageText} />
  </>
);
