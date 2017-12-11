/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr){
  const isUnique = (el, i, arr) => [...arr.slice(0, i), ...arr.slice(i + 1)].indexOf(el) === -1;

  return arr.every(isUnique);
}
