function sharedForEachBehavior(func) {
  let spy = null;
  describe("(shared)", function () {

    beforeEach(function () {
      spy = {
        subjectUnderTest() {
          func;
        }
      };

      spyOn(spy, 'subjectUnderTest');
    });

    it('is a function', function () {
      expect(func).toEqual(jasmine.any(Function));
    });

    it('accepts an array as first parameter', function () {
      spy.subjectUnderTest([1, 2, 3]);

      expect(spy.subjectUnderTest).toHaveBeenCalledWith(jasmine.any(Array));
      expect(spy.subjectUnderTest).not.toThrowError();
    });

    it('throws an error if first parameter is not an array', function () {
      expect(function () {
        func('not an array');
      }).toThrowError();

      expect(function () {
        func(1);
      }).toThrowError();

      expect(function () {
        func(undefined);
      }).toThrowError();
    });

    it('returns an array', function () {
      expect(func([])).toEqual(jasmine.any(Array));
    });
  });
}

module.exports = sharedForEachBehavior;
