import React from 'react';
import * as ReactDOM from 'react-dom';
import TestComponent from "./TestComponent"

describe('TestComponent', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestComponent text="some text"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
