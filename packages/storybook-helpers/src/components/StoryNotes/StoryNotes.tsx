import React from 'react';
import { StyledNotes } from './StoryNotes.styles';

export interface StoryNotesProps {
  notes: string;
}

const StoryNotes: React.FC<StoryNotesProps> = ({ notes }) => (
  <StyledNotes>{notes}</StyledNotes>
);

export default StoryNotes;
