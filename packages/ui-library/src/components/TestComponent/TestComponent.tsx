import React from "react";
import { StyledWrapper, StyledText } from "./TestComponent.styles"

export interface TestComponentProps {
  text: string;
  altStyle?: boolean;
}

const TestComponent = (props: TestComponentProps) => {
  return (
    <StyledWrapper altStyle={props.altStyle}>
      <StyledText altStyle={props.altStyle}>
        {props.text}
      </StyledText>
    </StyledWrapper>
  )
}

export default TestComponent;
