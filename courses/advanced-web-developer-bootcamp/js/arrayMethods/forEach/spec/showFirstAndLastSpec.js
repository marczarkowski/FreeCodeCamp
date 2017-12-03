const showFirstAndLast = require('../src/showFirstAndLast');

describe('showFirstAndLast', function () {
  it('is a function', function () {
    expect(showFirstAndLast).toEqual(jasmine.any(Function));
  });

  it('accepts an array of strings as a parameter', function () {
    const result = showFirstAndLast(['foo', 'bar', 'baz']);

    expect(result).toBeDefined();
  });

  it('throws an error if parameter is not an array', function () {
    expect(function () {
      showFirstAndLast('not an array');
    }).toThrowError();

    expect(function () {
      showFirstAndLast(1);
    }).toThrowError();

    expect(function () {
      showFirstAndLast(undefined);
    }).toThrowError();
  });

  it('returns an array', function () {
    const result = showFirstAndLast([]);

    expect(result).toEqual(jasmine.any(Array));
  });

  it('returns a new array with only the first and last character of each string', function() {
    const result1 = showFirstAndLast(['foo', 'bar', 'baz']);
    const result2 = showFirstAndLast(['sort', 'yourself', 'out', 'bucko']);

    expect(result1).toEqual(['fo', 'br', 'bz']);
    expect(result2).toEqual(['st', 'yf', 'ot', 'bo']);
  });
});
