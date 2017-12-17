/*
// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArgs(1,2,3,4) // 6
    sumEvenArgs(1,2,6) // 8
    sumEvenArgs(1,2) // 2
*/

function sumEvenArgs(...args) {
  let sum = 0;
  for (const arg of args) {
    sum = arg % 2 === 0 ? sum + arg : sum;
  }

  return sum;
}
