import React from 'react';
import { StyledContainer } from './MobileWrapper.styles';

const MobileWrapper: React.FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default MobileWrapper;
