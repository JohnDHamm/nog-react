import React from 'react';
import { CodeContainer, CodeLine } from './StoryCodeBlock.styles';

export interface CodeLineProps {
  text: string;
  format?: 'code' | 'comment' | 'blank';
  indent?: boolean;
}

const renderCodeLine = ({
  text,
  format = 'code',
  indent = false
}: CodeLineProps) => {
  return (
    <CodeLine key={text} format={format} indent={indent}>
      {text}
    </CodeLine>
  );
};

interface CodeBlockProps {
  code: CodeLineProps[];
}

const StoryCodeBlock: React.FC<CodeBlockProps> = ({ code }) => (
  <CodeContainer>{code.map(line => renderCodeLine(line))}</CodeContainer>
);

export default StoryCodeBlock;
