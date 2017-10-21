/**
 * Created by Marcin on 13.11.2016.
 */
function arrayToList(array)
{
    var list = null;
    for (var i = array.length-1; i>=0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function nth(list, index) {
    for (let i = 0; i < index; i++) {
        list = list.rest;
    }
    return list.value;
}
console.log(nth(arrayToList([10, 20, 30]), 2));