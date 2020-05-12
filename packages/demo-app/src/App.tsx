import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Create, Home, Play } from './pages';
import { NavBar } from 'ui-library';

function App() {
  return (
    <Router>
      <NavBar />
      <Link to="/">
        <p>Nog Demo App</p>
      </Link>
      <Switch>
        <Route path="/create" component={Create} />
        <Route path="/play" component={Play} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
