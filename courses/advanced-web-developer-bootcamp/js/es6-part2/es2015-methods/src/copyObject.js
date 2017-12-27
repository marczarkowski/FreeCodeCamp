/*
Write a function called copyObject, which accepts one parameter, an object. The function should return a shallow copy of the object.

var o = {name: 'Elie'}
var o2 = copyObject({}, o)
o2.name = "Tim"
o2.name // 'Tim'
o.name // 'Elie'
*/

function copyObject(dest, source){
  return Object.assign(dest, source);
}
