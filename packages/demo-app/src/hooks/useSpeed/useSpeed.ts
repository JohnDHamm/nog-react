import React from 'react';

export const useSpeed = (): SpeedContextInterface => {
  const [speed, setSpeed] = React.useState<string>('50');

  const setCurrentSpeed = React.useCallback((currentSpeed: string): void => {
    setSpeed(currentSpeed);
  }, []);

  return { speed, setCurrentSpeed };
};
