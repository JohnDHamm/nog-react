import React from 'react';
import './App.css';

import { testFunction } from "function-library";
import { TestComponent } from "ui-library"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Nog Demo App</p>
        <p>{testFunction("Johnathon")}</p>
        <TestComponent text="test in demo" />
        <TestComponent text="test in demo - alt style" altStyle={true} />
      </header>
    </div>
  );
}

export default App;
