import { storyPathHelper } from './storyPathHelper';

describe('storyPathHelper', () => {
  it('should return a string of "demo-app/" + the given arg', () => {
    expect(storyPathHelper('testPath')).toBe('demo-app/testPath');
  });
});
