import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { InstancesContext, SpeedContext } from './contexts';
import { useInstances, useSpeed } from './hooks';
import { CreatePage, Home, PlayPage } from './pages';
import { NavBar } from 'ui-library';

const GuestAvatar = require('./assets/guest_avatar.png');

function App() {
  const instances = useInstances();
  const speed = useSpeed();

  return (
    <InstancesContext.Provider value={instances}>
      <SpeedContext.Provider value={speed}>
        <Router>
          <NavBar avatarSrc={GuestAvatar} userName="Guest" />
          <Switch>
            <Route path="/create" component={CreatePage} />
            <Route path="/play" component={PlayPage} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </SpeedContext.Provider>
    </InstancesContext.Provider>
  );
}

export default App;
