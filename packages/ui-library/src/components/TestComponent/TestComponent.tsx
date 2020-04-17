import React from "react";
import { StyledWrapper, StyledText } from "./TestComponent.styles"

interface TestComponentProps {
  text: string;
  alt?: boolean;
}

const TestComponent = (props: TestComponentProps) => {
  return (
    <StyledWrapper alt={props.alt}>
      <StyledText alt={props.alt}>
        {props.text}
      </StyledText>
    </StyledWrapper>
  )
}

export default TestComponent;
