/**
 * Created by Marcin on 13.11.2016.
 */
function prepend(value, rest) {
    return { value: value, rest: rest }
}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}