/*
Write a function called addKeyAndValue which accepts an array, a key, and a value and returns a the array passed to the function with the new key and value added for each variable

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')

    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

function addKeyAndValue(arr, key, value) {
  if (Array.isArray(arr) && typeof key === 'string' && typeof value === 'string') {
    const result = [];

    arr.forEach((obj, i) => {
      result.push(obj);
      result[i][key] = value;
    });

    return result;
  }

  throw new Error('Usage: addKeyAndValue(arr, key, value). Ie. addKeyAndValue([{name: \'Elie\'}, {name: \'Tim\'}, {name: \'Matt\'}, {name: \'Colt\'}], \'title\', \'instructor\')');
}

module.exports = addKeyAndValue;
