/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,9,20]

*/

function doubleValues(arr) {
  const result = [];
  arr.forEach(el => result.push(el * 2));

  return result;
}

module.exports = doubleValues;
