import React from 'react';
import './App.css';

import { testFunction } from "function-library"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Nog App
        </p>
        <p>{testFunction("Dave")} How you doing?</p>
      </header>
    </div>
  );
}

export default App;
