import React from 'react';
import { COLORS, COLOR_NAMES } from './index';
import ColorCard from '../storybook/ColorCard/ColorCard';
import CodeBlock, { CodeLine } from '../storybook/CodeBlock/CodeBlock';

export default {
  title: 'design-system/colors'
};

const usageText: Array<CodeLine> = [
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
      <h1 style={{ marginTop: 0, color: '#555' }}>COLORS</h1>
      <div style={{ display: 'flex' }}>
        {COLOR_NAMES.map(color => {
          return <ColorCard colorName={color} value={COLORS[color]} />;
        })}
      </div>
      <h3 style={{ color: 'grey', marginTop: '3rem' }}>Usage</h3>
      <CodeBlock code={usageText} />
    </>
  );
};

Default.story = {
  name: 'COLORS'
};
