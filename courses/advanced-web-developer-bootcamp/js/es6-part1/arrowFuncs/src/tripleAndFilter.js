/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }

*/

const tripleAndFilter = (arr) => {
  return arr
    .map(value => value * 3)
    .filter(value => value % 5 === 0);
};
