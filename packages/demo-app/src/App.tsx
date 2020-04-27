import React from 'react';
import './App.css';

import { sayHello } from "function-library";
import { TestComponent } from "ui-library";
import { Thing } from "test-lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Nog Demo App</p>
        <p>{sayHello("John")}</p>
        <TestComponent text="test in demo" />
        <TestComponent text="test in demo - alt style" altStyle={true} />
        <Thing>a thing</Thing>
      </header>
    </div>
  );
}

export default App;
