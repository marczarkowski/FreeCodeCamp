/**
 * Created by Marcin on 11.11.2016.
 */
function reverseArray(array) {
    var reversedArray = array.reduce(function (newArr, element) {
        newArr.unshift(element);
        return newArr;
    }, []);
    return reversedArray;
}

function reverseArrayInPlace(array) {
    reversedArray = reverseArray(array);
    for (let i = 0; i < reversedArray.length; i++ ) {
        array[i] = reversedArray[i];
    }
    return array;

}
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
var keys = Object.keys(arrayValue);
for (var i = 0; i < keys.length; i++) {
    console.log(arrayValue[keys[i]]);
}