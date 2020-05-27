import React from 'react';
import {
  Instance,
  initialInstances
} from '../../contexts/InstancesContext/InstancesContext';

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
