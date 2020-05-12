import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Create, Home, Play } from './pages';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/create" component={Create} />
        <Route path="/play" component={Play} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
