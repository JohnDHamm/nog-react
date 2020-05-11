import React from 'react';
import { COLORS, COLOR_NAMES } from './index';
import ColorCard from '../storybook/ColorCard/ColorCard';
import {
  StoryCodeBlock,
  StoryCodeLineProps,
  StorySectionTitle,
  StoryTitle
} from 'storybook-helpers';

export default {
  title: 'design-system/colors'
};

const usageText: Array<StoryCodeLineProps> = [
  {
    text: '// use in a styled-component:',
    format: 'comment'
  },
  {
    text: "import { COLORS } from 'design-system';"
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
    text: 'background-color: ${COLORS.BADASS};',
    indent: true
  }
];

export const Default = () => {
  return (
    <>
      <StoryTitle title="COLORS" />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '1rem',
          marginBottom: '3rem'
        }}
      >
        {COLOR_NAMES.map(color => {
          return (
            <ColorCard key={color} colorName={color} value={COLORS[color]} />
          );
        })}
      </div>
      <StorySectionTitle title="Usage" />
      <StoryCodeBlock code={usageText} />
    </>
  );
};

Default.story = {
  name: 'COLORS'
};
