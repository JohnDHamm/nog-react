import React from 'react';

export interface Instance {
  instanceNum: number;
  lightColors: Array<number>;
}

declare global {
  interface InstancesContextInterface {
    instances: Array<Instance>;
    setCurrentInstances: (instances: Array<Instance>) => void;
  }
}

export const createInitialLightColors = (): Array<number> => {
  const newLightColors = [];
  for (let i = 0; i < 30; i++) {
    newLightColors.push(7);
  }
  return newLightColors;
};

export const initialInstances: Array<Instance> = [
  {
    instanceNum: 0,
    lightColors: createInitialLightColors()
  },
  {
    instanceNum: 1,
    lightColors: createInitialLightColors()
  },
  {
    instanceNum: 2,
    lightColors: createInitialLightColors()
  },
  {
    instanceNum: 3,
    lightColors: createInitialLightColors()
  }
];

export const INSTANCES_DEFAULT_VALUE: InstancesContextInterface = {
  instances: initialInstances,
  setCurrentInstances: () => {}
};

export const instancesContext = React.createContext<InstancesContextInterface>(
  INSTANCES_DEFAULT_VALUE
);
