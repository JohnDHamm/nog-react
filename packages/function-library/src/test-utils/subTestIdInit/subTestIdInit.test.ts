import { subTestIdInit } from './subTestIdInit';

describe('subTestIdInit', () => {
  it('should return a function that returns the initial testid string with a substring separated by a dash', () => {
    const testid = 'Test';
    const subTestid = subTestIdInit(testid);
    expect(subTestid('subTest')).toEqual('Test-subTest');
  });
});
