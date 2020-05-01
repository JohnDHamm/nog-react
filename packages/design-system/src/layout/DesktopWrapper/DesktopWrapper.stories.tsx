import React from 'react';
import DesktopWrapper from './DesktopWrapper';
import CodeBlock, { CodeLine } from '../../storybook/CodeBlock/CodeBlock';

const usageText: Array<CodeLine> = [
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
  title: 'design-system/layout',
  component: DesktopWrapper
};

export const Default = () => (
  <>
    <h1 style={{ marginTop: 0, color: '#555' }}>DesktopWrapper</h1>
    <p>
      The children of a DesktopWrapper component are only visible at desktop
      screen width (1024+ px).
    </p>
    <p>(resize window to test)</p>
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
    <h3 style={{ color: 'grey', marginTop: '3rem' }}>Usage</h3>
    <CodeBlock code={usageText} />
  </>
);

Default.story = {
  name: 'DesktopWrapper'
};
