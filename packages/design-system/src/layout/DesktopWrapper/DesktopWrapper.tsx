import React from 'react';
import { StyledContainer } from './DesktopWrapper.styles';

const DesktopWrapper: React.FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default DesktopWrapper;
