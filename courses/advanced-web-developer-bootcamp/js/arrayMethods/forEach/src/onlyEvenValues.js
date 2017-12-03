/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/

function onlyEvenValues(arr) {
  if (Array.isArray(arr)) {
    const result = [];

    arr.forEach((el) => {
      if (el % 2 === 0) {
        result.push(el);
      }
    });
    return result;
  }

  throw new Error('Usage: onlyEvenValues(arr). arr must be an Array');
}

module.exports = onlyEvenValues;
