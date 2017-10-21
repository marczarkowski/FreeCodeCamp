/**
 * Created by Marcin on 13.11.2016.
 */

var obj = {here: {is: "an"}, object: 2};

function deepEqual(obj1, obj2) {
    for (prop in obj1) {
        if (typeof obj1[prop] === 'object' && typeof obj2[prop] === 'object' && obj1[prop] != null) {
            deepEqual(obj1[prop], obj2[prop]);
        } else {
            if (obj1[prop] !== obj2[prop]) {
                return false;
            }
        }
    }
    return true;
}
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
