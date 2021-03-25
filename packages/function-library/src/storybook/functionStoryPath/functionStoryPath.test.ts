import { functionStoryPath } from './functionStoryPath';

describe('functionStoryPath', () => {
  it('should return the path of "function-library/" + supplied path arg', () => {
    expect(functionStoryPath('test')).toEqual('function-library/test');
  });
});
