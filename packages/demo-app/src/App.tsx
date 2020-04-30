import React from 'react';
import './App.css';

import { sayHello } from 'function-library';
import { TestComponent } from 'ui-library';
import { DesktopWrapper } from 'design-system';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Nog Demo App</p>
        <p>{sayHello('John')}</p>
        <TestComponent text="test in demo" />
        <TestComponent text="test in demo - alt style" altStyle={true} />
        <DesktopWrapper />
      </header>
    </div>
  );
}

export default App;
