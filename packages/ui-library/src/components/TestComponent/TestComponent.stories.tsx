import React from "react";
import TestComponent from "./TestComponent";

export default {
  title: 'Test Component',
  component: TestComponent
};

export const Default = () => <TestComponent text="This is only a test." />;

export const AlternateStyle = () => <TestComponent text="Alternate styling." alt={true} />;
