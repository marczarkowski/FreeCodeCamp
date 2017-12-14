/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/

const doubleOddNumbers = (arr) => {
  return arr
    .filter(val => val % 2 !== 0)
    .map(val => val * 2);
};
