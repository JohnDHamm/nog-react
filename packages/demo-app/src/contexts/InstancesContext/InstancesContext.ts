import React from 'react';
import { getNewInstanceLightColors } from 'function-library';

declare global {
  interface Instance {
    instanceNum: number;
    lightColors: Array<number>;
  }

  interface InstancesContextInterface {
    instances: Array<Instance>;
    setCurrentInstances: (instances: Array<Instance>) => void;
  }
}

export const initialInstances: Array<Instance> = [
  {
    instanceNum: 0,
    lightColors: getNewInstanceLightColors()
  },
  {
    instanceNum: 1,
    lightColors: getNewInstanceLightColors()
  },
  {
    instanceNum: 2,
    lightColors: getNewInstanceLightColors()
  },
  {
    instanceNum: 3,
    lightColors: getNewInstanceLightColors()
  }
];

export const INSTANCES_DEFAULT_VALUE: InstancesContextInterface = {
  instances: initialInstances,
  setCurrentInstances: () => {}
};

export const InstancesContext = React.createContext<InstancesContextInterface>(
  INSTANCES_DEFAULT_VALUE
);
