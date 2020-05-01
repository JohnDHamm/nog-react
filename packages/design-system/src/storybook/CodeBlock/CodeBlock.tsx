import React from 'react';
import { UsageCode, UsageLine } from './CodeBlock.styles';

export interface CodeLine {
  text: string;
  format?: 'code' | 'comment' | 'blank';
  indent?: boolean;
}

const renderUsageLine = ({
  text,
  format = 'code',
  indent = false
}: CodeLine) => {
  return (
    <UsageLine format={format} indent={indent}>
      {text}
    </UsageLine>
  );
};

interface Props {
  code: CodeLine[];
}

const CodeBlock: React.FC<Props> = ({ code }) => (
  <UsageCode>{code.map((line: CodeLine) => renderUsageLine(line))}</UsageCode>
);

export default CodeBlock;
