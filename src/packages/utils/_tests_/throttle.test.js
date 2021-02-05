import utils from '../index';

describe('[package][utils] throttle', () => {
  it('test call 5 time and execute only once', () => {
    const data = { counter: 0 };

    const increment = (someData) => {
      someData.counter++;
    };

    const throttledIncrement = utils.throttle(increment, 1000);

    throttledIncrement(data);
    throttledIncrement(data);
    throttledIncrement(data);
    throttledIncrement(data);
    throttledIncrement(data);

    expect(data.counter).toEqual(1);
  });
});
