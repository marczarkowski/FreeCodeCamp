const doubleValues = require('../src/doubleValues');

describe('doubleValues', function() {
  it('is a function', function() {
    expect(doubleValues).toEqual(jasmine.any(Function));
  });

  it('accepts an array as parameter', function () {
    const result = doubleValues([1, 2, 3]);

    expect(result).toBeDefined();
  });

  it('throws an error if parameter is not an array', function () {
    expect(function () {
      doubleValues('not an array');
    }).toThrowError();

    expect(function () {
      doubleValues(1);
    }).toThrowError();

    expect(function () {
      doubleValues(undefined);
    }).toThrowError();
  });

  it('returns an array', function() {
    const result = doubleValues([1, 2, 3]);

    expect(result).toEqual(jasmine.any(Array));
  });

  it('returns an array with all the values in the array passed to the function doubled', function() {
    const arr1 = [1, 2, 3];
    const result1 = doubleValues(arr1);

    const arr2 = [5, 1, 2, 3, 10];
    const result2 = doubleValues(arr2);

    expect(result1).toEqual([2, 4, 6]);
    expect(result2).toEqual([10, 2, 4, 6, 20]);
  });
});
