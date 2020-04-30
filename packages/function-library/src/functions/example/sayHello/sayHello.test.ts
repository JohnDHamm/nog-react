import sayHello from './sayHello';

const name: string = 'Bob';

describe('sayHello', () => {
  it('given a name, it returns a greeting', () => {
    expect(sayHello(name)).toBe(`Hello, ${name}.`);
  });
});
