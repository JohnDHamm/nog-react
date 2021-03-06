import React from 'react';
import { CodeContainer, CodeLine } from './StoryCodeBlock.styles';

export interface StoryCodeLineProps {
  text: string;
  format?: 'code' | 'comment' | 'blank';
  indent?: boolean;
}

const renderCodeLine = (
  { text, format = 'code', indent = false }: StoryCodeLineProps,
  idx: number
) => {
  return (
    <CodeLine key={idx} format={format} indent={indent}>
      {text}
    </CodeLine>
  );
};

interface CodeBlockProps {
  code: StoryCodeLineProps[];
}

const StoryCodeBlock: React.FC<CodeBlockProps> = ({ code }) => (
  <CodeContainer>
    {code.map((line, idx) => renderCodeLine(line, idx))}
  </CodeContainer>
);

export default StoryCodeBlock;
