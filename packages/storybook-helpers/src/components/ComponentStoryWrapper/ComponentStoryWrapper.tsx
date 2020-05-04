import React from 'react';
import {
  PropsTableProps,
  StoryCodeBlock,
  StoryCodeLineProps,
  StoryNotes,
  StoryPropsTable,
  StorySectionTitle,
  StoryTitle
} from '../../index';

import { ComponentContainer } from './ComponentStoryWrapper.styles';

interface ComponentStoryWrapperProps {
  name: string;
  subName?: string;
  description?: string;
  component: JSX.Element;
  notes?: string;
  componentProps?: Array<PropsTableProps>;
  code?: Array<StoryCodeLineProps>;
}

const ComponentStoryWrapper: React.FC<ComponentStoryWrapperProps> = ({
  name,
  subName,
  description,
  component,
  notes,
  componentProps,
  code
}) => {
  return (
    <div>
      <StoryTitle title={name} subtitle={subName ? subName : ''} />
      {description && <StoryNotes notes={description} />}
      <ComponentContainer>{component}</ComponentContainer>
      {code && (
        <>
          <StorySectionTitle title="Usage" />
          <StoryCodeBlock code={code} />
        </>
      )}
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
