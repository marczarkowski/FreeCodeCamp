const addKeyAndValue = require('../src/addKeyAndValue');
const shared = require('./shared/SharedForEachBehavior');

describe('addKeyAndValue', function () {
  let spy = null;



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
  function createInstance(...params) {
    return addKeyAndValue(params);
  }

  shared(createInstance);
});
