/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/

function showFirstAndLast(arr) {
  const isAString = el => typeof el === 'string';

  if (Array.isArray(arr) && arr.every(isAString)) {
    const result = [];

    arr.forEach((el) => {
      const firstAndLast = `${el.substr(0, 1)}${el.substr(-1, 1)}`;
      result.push(firstAndLast);
    });

    return result;
  }

  throw new Error('Usage: showFirstAndLast(arr). arr must be an array of strings. Ie. showFirstAndLast[\'foo\', \'bar\']');
}

module.exports = showFirstAndLast;
