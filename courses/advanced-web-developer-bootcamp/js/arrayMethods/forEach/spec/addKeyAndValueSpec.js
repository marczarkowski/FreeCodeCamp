const addKeyAndValue = require('../src/addKeyAndValue');
const shared = require('./shared/SharedForEachBehavior');

describe('addKeyAndValue', function () {

  it('returns a the array passed to the function with the new key and value added for each variable', function () {
    expect(addKeyAndValue(
      [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}],
      'title', 'instructor'
    )).toEqual([
      {name: 'Elie', title: 'instructor'}, {name: 'Tim', title: 'instructor'},
      {name: 'Matt', title: 'instructor'}, {name: 'Colt', title: 'instructor'}
    ]);
  });

  shared(addKeyAndValue);
});
