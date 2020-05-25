import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CreatePage, Home, PlayPage } from './pages';
import { NavBar } from 'ui-library';

const GuestAvatar = require('./assets/guest_avatar.png');

function App() {
  return (
    <Router>
      <NavBar avatarSrc={GuestAvatar} userName="Guest" />
      <Switch>
        <Route path="/create" component={CreatePage} />
        <Route path="/play" component={PlayPage} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
