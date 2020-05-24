import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CreatePage, Home, PlayPage } from './pages';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/create" component={CreatePage} />
        <Route path="/play" component={PlayPage} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
