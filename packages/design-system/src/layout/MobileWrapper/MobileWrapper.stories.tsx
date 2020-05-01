import React from 'react';
import MobileWrapper from './MobileWrapper';
import CodeBlock, { CodeLine } from '../../storybook/CodeBlock/CodeBlock';

const usageText: Array<CodeLine> = [
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
    <h1 style={{ marginTop: 0, color: '#555' }}>MobileWrapper</h1>
    <p>
      The children of a MobileWrapper component are only visible at mobile
      screen width (less than 1024px).
    </p>
    <p>(resize window to test)</p>
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
    <h3 style={{ color: 'grey', marginTop: '3rem' }}>Usage</h3>
    <CodeBlock code={usageText} />
  </>
);
