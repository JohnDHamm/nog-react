import React from 'react';
import {
  StoryFunctionTitle,
  StoryNotes,
  StorySectionTitle
} from 'storybook-helpers';

import { UsageCode, UsageLine } from './FunctionStoryWrapper.styles';

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
  indent = false
}: UsageProps) => {
  return (
    <UsageLine key={text} format={format} indent={indent}>
      {text}
    </UsageLine>
  );
};

const FunctionStoryWrapper: React.FC<FunctionStoryWrapperProps> = ({
  args,
  description,
  name,
  notes,
  usage
}) => {
  return (
    <>
      <StoryFunctionTitle name={name} args={args} />
      {description && <StoryNotes notes={description} />}
      <StorySectionTitle title="Usage" />
      {usage && (
        <UsageCode>
          {usage.map((line: UsageProps) => renderUsageLine(line))}
        </UsageCode>
      )}
      {notes && (
        <>
          <StorySectionTitle title="Notes" />
          <StoryNotes notes={notes} />
        </>
      )}
    </>
  );
};

export default FunctionStoryWrapper;
