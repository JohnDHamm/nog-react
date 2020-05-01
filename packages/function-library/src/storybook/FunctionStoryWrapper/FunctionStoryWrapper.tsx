import React from 'react';
import {
  Args,
  Description,
  Name,
  SectionTitle,
  UsageCode,
  UsageLine,
} from './FunctionStoryWrapper.styles';

interface UsageProps {
  text: string;
  format?: 'code' | 'comment';
  indent?: boolean;
}

interface FunctionStoryWrapperProps {
  name: string;
  description?: string;
  args?: string;
  notes?: string;
  usage?: Array<UsageProps>;
}

const renderUsageLine = ({
  text,
  format = 'code',
  indent = false,
}: UsageProps) => {
  return (
    <UsageLine format={format} indent={indent}>
      {text}
    </UsageLine>
  );
};

const FunctionStoryWrapper: React.FC<FunctionStoryWrapperProps> = ({
  args,
  description,
  name,
  notes,
  usage,
}) => {
  return (
    <>
      <Name>
        {name}(<Args>{args}</Args>)
      </Name>
      {description && <Description>{description}</Description>}
      <SectionTitle>Usage</SectionTitle>
      {usage && (
        <UsageCode>
          {usage.map((line: UsageProps) => renderUsageLine(line))}
        </UsageCode>
      )}
      {notes && (
        <>
          <SectionTitle>Notes</SectionTitle>
          <div>{notes}</div>
        </>
      )}
    </>
  );
};

export default FunctionStoryWrapper;
