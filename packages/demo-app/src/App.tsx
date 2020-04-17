import React from 'react';
import './App.css';

import { testFunction } from "function-library";
import { TestComponent } from "ui-library"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Nog Demo App</p>
        <p>{testFunction("Johnny")}</p>
        <TestComponent text="bam!" />
      </header>
    </div>
  );
}

export default App;
