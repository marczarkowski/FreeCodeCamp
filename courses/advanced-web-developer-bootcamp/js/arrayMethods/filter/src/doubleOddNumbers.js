/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
  const isOdd = el => el % 2 !== 0;
  const multiplyBy = multiplier => el => el * multiplier;
  const byTwo = multiplyBy(2);

  return arr
    .filter(isOdd)
    .map(byTwo);
}
