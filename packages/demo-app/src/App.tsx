import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Create, Home, Play } from './pages';

function App() {
  return (
    <Router>
      <div className="App">
        <p>Nog Demo App</p>
        <Switch>
          <Route path="/create" component={Create} />
          <Route path="/play" component={Play} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
