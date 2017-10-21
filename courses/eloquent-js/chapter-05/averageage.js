/**
 * Created by Marcin on 13.11.2016.
 */
var ancestors = JSON.parse(require('./ancestry.js'));

function average(array) {
    let plus = (a, b) => { return a + b }
    return array.reduce(plus) / array.length;
}
let age = (person) => { return person.died - person.born }
let males = (person) => { return person.sex === "m" }
let females = (person) => { return person.sex === "f" }

console.log(`Average male lifetime: ${average(ancestors.filter(males).map(age))}`);
console.log(`Average female lifetime: ${average(ancestors.filter(females).map(age))}`);