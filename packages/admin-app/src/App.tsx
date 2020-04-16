import React from 'react';
import './App.css';
import { testFunction } from "function-library";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Nog Admin App
        </p>
        <p>{testFunction("your worship")} What can I do to please you today?</p>
      </header>
    </div>
  );
}

export default App;
