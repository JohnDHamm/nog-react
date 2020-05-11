import React from 'react';
import { StyledContainer } from './ContentContainer.styles';

const ContentContainer: React.FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ContentContainer;
