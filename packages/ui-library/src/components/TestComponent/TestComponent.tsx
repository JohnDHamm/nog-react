import React from "react";

interface TestProps {
  text: string;
}

const TestComponent = (props: TestProps) => {
  return (
    <div style={{ border: "1px solid white", borderRadius: "5px", color: "navy", padding: "1rem", backgroundColor: "#BADA55"}}>
      Test Component - {props.text}
    </div>
  )
}

export default TestComponent;
