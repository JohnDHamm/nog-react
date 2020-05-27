import React from 'react';
import { initialInstances } from '../../contexts/SInstancesContext/SInstancesContext';

export const useInstances = (): InstancesContextInterface => {
  const [instances, setInstances] = React.useState<Instance[]>(
    initialInstances
  );

  const setCurrentInstances = React.useCallback(
    (currentInstances: Instance[]): void => {
      setInstances(currentInstances);
    },
    []
  );

  return { instances, setCurrentInstances };
};
