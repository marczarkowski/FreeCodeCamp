/*
Write a function called addKeyAndValue which accepts an array, a key, and a value and returns a the array passed to the function with the new key and value added for each variable

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')

    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

function addKeyAndValue(arr, key) {
  // const isAString = el => typeof el === 'string';
  //
  if (Array.isArray(arr)) {
    const result = [];
    //
    //   arr.forEach((el) => {
    //     const firstAndLast = `${el.substr(0, 1)}${el.substr(-1, 1)}`;
    //     result.push(firstAndLast);
    //   });
    //
    return result;
  }

  throw new Error('Usage: addKeyAndValue(arr, key, value). Ie. addKeyAndValue([{name: \'Elie\'}, {name: \'Tim\'}, {name: \'Matt\'}, {name: \'Colt\'}], \'title\', \'instructor\')');
}

module.exports = addKeyAndValue;
