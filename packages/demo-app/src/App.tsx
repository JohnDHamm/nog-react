import React from 'react';
import './App.css';

import { testFunction } from "function-library";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Nog Demo App</p>
        <p>{testFunction("Johnny")}</p>
      </header>
    </div>
  );
}

export default App;
