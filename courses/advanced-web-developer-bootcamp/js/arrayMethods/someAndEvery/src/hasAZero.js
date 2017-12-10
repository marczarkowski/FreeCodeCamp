/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(numb) {
  const arr = `${numb}`.split('');

  const isZero = el => el === '0';

  return arr.some(isZero);
}
