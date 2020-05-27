import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { instancesContext } from './contexts';
import { useInstances } from './hooks';
import { CreatePage, Home, PlayPage } from './pages';
import { NavBar } from 'ui-library';

const GuestAvatar = require('./assets/guest_avatar.png');

function App() {
  const instances = useInstances();

  return (
    <instancesContext.Provider value={instances}>
      <Router>
        <NavBar avatarSrc={GuestAvatar} userName="Guest" />
        <Switch>
          <Route path="/create" component={CreatePage} />
          <Route path="/play" component={PlayPage} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </instancesContext.Provider>
  );
}

export default App;
