/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/

const mapFilterAndReduce = (arr) => {
  return arr
    .map(val => val.firstName)
    .filter(val => val.length < 5)
    .reduce((acc, next) => {
      acc[next] = next.length;
      return acc;
    }, {});
};
