import React from 'react';
import './App.css';

import { testFunction } from "function-library"
import { TestComponent } from "ui-library"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Nog App
        </p>
        <p>{testFunction("David")} How you doin?</p>
        <TestComponent text="test in app" />
      </header>
    </div>
  );
}

export default App;
