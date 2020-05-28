import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ColorPaletteContext,
  InstancesContext,
  SpeedContext
} from './contexts';
import { useColorPalette, useInstances, useSpeed } from './hooks';
import { CreatePage, HomePage, PlayPage } from './pages';
import { NavBar } from 'ui-library';

const GuestAvatar = require('./assets/guest_avatar.png');

function App() {
  const colorPalette = useColorPalette();
  const instances = useInstances();
  const speed = useSpeed();

  return (
    <InstancesContext.Provider value={instances}>
      <ColorPaletteContext.Provider value={colorPalette}>
        <SpeedContext.Provider value={speed}>
          <Router>
            <NavBar avatarSrc={GuestAvatar} userName="Guest" />
            <Switch>
              <Route path="/create" component={CreatePage} />
              <Route path="/play" component={PlayPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </Router>
        </SpeedContext.Provider>
      </ColorPaletteContext.Provider>
    </InstancesContext.Provider>
  );
}

export default App;
