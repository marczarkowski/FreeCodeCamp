/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

    addKeyAndValue(arr, 'title', 'Instructor') //
      [
        {title: 'Instructor', name: 'Elie'},
        {title: 'Instructor', name: 'Tim'},
        {title: 'Instructor', name: 'Matt'},
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
  const addKeyValue = (acc, next) => {
    Object.defineProperty(next, key, {
      value,
      enumerable: true,
    });
    acc.push(next);

    return acc;
  };

  return arr.reduce(addKeyValue, []);
}

const arr = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }];

console.log(addKeyAndValue(arr, 'title', 'Instructor'));
