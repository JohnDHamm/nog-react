import React from 'react';
import './App.css';
import { sayHello } from "function-library";
import { TestComponent } from "ui-library"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Nog Admin App
        </p>
        <p>{sayHello("your highness")} What can I do for you today?</p>
        <TestComponent text="admin test" />
      </header>
    </div>
  );
}

export default App;
