import React from 'react';
import './App.css';

import { sayHello } from 'function-library';
import { TestComponent } from 'ui-library';
import { DesktopWrapper, MobileWrapper } from 'design-system';
import { ExampleComponent } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Nog Demo App</p>
        <p>{sayHello('John')}</p>
        <TestComponent text="test in demo" />
        <TestComponent text="test in demo - alt style" altStyle={true} />
        <ExampleComponent />
        <DesktopWrapper>
          <div style={{ border: '1px solid green', padding: '1rem' }}>
            only visible on desktop
          </div>
        </DesktopWrapper>
        <MobileWrapper>
          <div style={{ border: '1px solid red', padding: '1rem' }}>
            only visible on mobile
          </div>
        </MobileWrapper>
      </header>
    </div>
  );
}

export default App;
