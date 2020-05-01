import React from 'react';
import {
  StoryNotes,
  StoryPropsTable,
  StorySectionTitle,
  StoryTitle,
} from 'storybook-helpers';

import { ComponentContainer } from './ComponentStoryWrapper.styles';

export interface ComponentProps {
  propName: string;
  propType: 'string' | 'number' | 'boolean' | '() => fn';
  description: string;
  required: boolean;
}

interface ComponentStoryWrapperProps {
  name: string;
  subName?: string;
  description?: string;
  component: JSX.Element;
  notes?: string;
  componentProps?: Array<ComponentProps>;
}

const ComponentStoryWrapper: React.FC<ComponentStoryWrapperProps> = ({
  name,
  subName,
  description,
  component,
  notes,
  componentProps,
}) => {
  return (
    <div>
      <StoryTitle title={name} subtitle={`/${subName}`} />
      {description && <StoryNotes notes={description} />}
      <ComponentContainer>{component}</ComponentContainer>
      {notes && (
        <>
          <StorySectionTitle title="Notes" />
          <StoryNotes notes={notes} />
        </>
      )}
      {componentProps && <StoryPropsTable componentProps={componentProps} />}
    </div>
  );
};

export default ComponentStoryWrapper;
