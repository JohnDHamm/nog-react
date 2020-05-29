import React from 'react';
import DesktopWrapper from './DesktopWrapper';
import {
  StoryCodeBlock,
  StoryCodeLineProps,
  StoryNotes,
  StorySectionTitle,
  StoryTitle
} from 'storybook-helpers';

const usageText: Array<StoryCodeLineProps> = [
  {
    text: "import { DesktopWrapper } from 'design-system';"
  },
  {
    text: '',
    format: 'blank'
  },
  {
    text: '<DesktopWrapper>'
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
    text: '</DesktopWrapper>'
  }
];

export default {
  title: 'design-system/layout/DesktopWrapper',
  component: DesktopWrapper
};

export const Default = () => (
  <>
    <StoryTitle title="DesktopWrapper" />
    <StoryNotes notes="The children of a DesktopWrapper component are only visible at desktop screen width (1280+ px). (resize window to test)" />
    <DesktopWrapper>
      <div
        style={{
          border: '2px solid green',
          padding: '1rem',
          textAlign: 'center',
          marginTop: '3rem'
        }}
      >
        This is a child of a DesktopWrapper.
      </div>
    </DesktopWrapper>
    <div style={{ height: '3rem' }} />
    <StorySectionTitle title="Usage" />
    <StoryCodeBlock code={usageText} />
  </>
);
