const onlyEvenValues = require('../src/onlyEvenValues');

describe('onlyEvenValues', function () {
  it('is a function', function () {
    expect(onlyEvenValues).toEqual(jasmine.any(Function));
  });

  it('accepts an array as parameter', function () {
    const result = onlyEvenValues([1, 2, 3]);

    expect(result).toBeDefined();
  });

  it('throws an error if parameter is not an array', function () {
    expect(function () {
      onlyEvenValues('not an array');
    }).toThrowError();

    expect(function () {
      onlyEvenValues(1);
    }).toThrowError();

    expect(function () {
      onlyEvenValues(undefined);
    }).toThrowError();
  });

  it('returns an array', function () {
    const result = onlyEvenValues([]);

    expect(result).toEqual(jasmine.any(Array));
  });

  it('returns a new array with only the even values in the array passed to the function', function () {
    const result1 = onlyEvenValues([1, 2, 3]);
    const result2 = onlyEvenValues([5, 1, 2, 3, 10]);

    expect(result1).toEqual([2]);
    expect(result2).toEqual([2, 10]);
  });
});
