import { getNewInstanceLightColors } from './getNewInstanceLightColors';

describe('getNewInstanceLightColors', () => {
  it('returns an array of 30 values of 7', () => {
    expect(getNewInstanceLightColors()).toEqual([
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7
    ]);
  });
});
