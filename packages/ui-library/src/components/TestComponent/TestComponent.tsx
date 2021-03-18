import React from 'react';
import { StyledWrapper, StyledText } from './TestComponent.styles';

export interface TestComponentProps {
  text: string;
  altStyle?: boolean;
}

const TestComponent: React.FC<TestComponentProps> = ({ altStyle, text }) => {
  return (
    <StyledWrapper data-testid="TestComponent" altStyle={altStyle}>
      <StyledText altStyle={altStyle}>{text}</StyledText>
    </StyledWrapper>
  );
};

export default TestComponent;
