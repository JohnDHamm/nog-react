import React from 'react';
import { StyledSectionTitle } from './StorySectionTitle.styles';

export interface SectionTitleProps {
  title: string;
}

const StorySectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <StyledSectionTitle>{title}</StyledSectionTitle>
);

export default StorySectionTitle;
