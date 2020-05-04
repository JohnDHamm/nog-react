import React from 'react';
import { StyledTitle, StyledSubTitle } from './StoryTitle.styles';

export interface StoryTitleProps {
  title: string;
  subtitle?: string;
}

const StoryTitle: React.FC<StoryTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      {subtitle && <StyledSubTitle>/{subtitle}</StyledSubTitle>}
    </>
  );
};

export default StoryTitle;
