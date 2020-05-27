import React from 'react';

declare global {
  interface SpeedContextInterface {
    speed: string;
    setCurrentSpeed: (speed: string) => void;
  }
}

export const SPEED_DEFAULT_VALUE: SpeedContextInterface = {
  speed: '50',
  setCurrentSpeed: () => {}
};

export const SpeedContext = React.createContext<SpeedContextInterface>(
  SPEED_DEFAULT_VALUE
);
