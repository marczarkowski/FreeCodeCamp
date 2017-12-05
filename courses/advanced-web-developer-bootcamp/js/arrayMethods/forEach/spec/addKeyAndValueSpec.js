const addKeyAndValue = require('../src/addKeyAndValue');

describe('addKeyAndValue', function () {
  let spy = null;

  beforeEach(function () {
    spy = {
      addKeyAndValue,
    };

    spyOn(spy, 'addKeyAndValue');
  });

  it('is a function', function () {
    expect(addKeyAndValue).toEqual(jasmine.any(Function));
  });

  it('accepts an array as first parameter', function () {
    spy.addKeyAndValue([1, 2, 3]);

    expect(spy.addKeyAndValue).toHaveBeenCalledWith(jasmine.any(Array));
    expect(spy.addKeyAndValue).not.toThrowError();
  });

  it('throws an error if first parameter is not an array', function () {
    expect(function () {
      addKeyAndValue('not an array');
    }).toThrowError();

    expect(function () {
      addKeyAndValue(1);
    }).toThrowError();

    expect(function () {
      addKeyAndValue(undefined);
    }).toThrowError();
  });

  it('returns an array', function () {
    const result = addKeyAndValue([]);

    expect(result).toEqual(jasmine.any(Array));
  });


  //
  // it('throws an error if parameter is not an array', function () {
  //   expect(function () {
  //     showFirstAndLast('not an array');
  //   }).toThrowError();
  //
  //   expect(function () {
  //     showFirstAndLast(1);
  //   }).toThrowError();
  //
  //   expect(function () {
  //     showFirstAndLast(undefined);
  //   }).toThrowError();
  // });
  //
  // it('returns an array', function () {
  //   const result = showFirstAndLast([]);
  //
  //   expect(result).toEqual(jasmine.any(Array));
  // });
  //
  // it('returns a new array with only the first and last character of each string', function() {
  //   const result1 = showFirstAndLast(['foo', 'bar', 'baz']);
  //   const result2 = showFirstAndLast(['sort', 'yourself', 'out', 'bucko']);
  //
  //   expect(result1).toEqual(['fo', 'br', 'bz']);
  //   expect(result2).toEqual(['st', 'yf', 'ot', 'bo']);
  // });
});
