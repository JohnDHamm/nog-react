import React from 'react';
import {
  StoryCodeBlock,
  StoryCodeLineProps,
  StoryFunctionTitle,
  StoryNotes,
  StorySectionTitle
} from 'storybook-helpers';

interface FunctionStoryWrapperProps {
  name: string;
  description?: string;
  args?: string;
  notes?: string;
  usage?: Array<StoryCodeLineProps>;
}

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
      {usage && (
        <>
          <StorySectionTitle title="Usage" />
          <StoryCodeBlock code={usage} />
        </>
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
