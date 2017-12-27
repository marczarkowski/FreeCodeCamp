/*

Write a function called convertArrayLikeObject which accepts a single parameter, an array like object. The function should return the array like object converted to an array.

var divs = document.getElementsByTagName('div')
divs.reduce // undefined

var converted = convertArrayLikeObject(divs)
converted.reduce // funciton(){}...
*/

function convertArrayLikeObject(obj){
  return Array.from(obj);
}
