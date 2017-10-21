/**
 * Created by Marcin on 18.11.2016.
 */
let ancestors = JSON.parse(require('./ancestry.js'));

let byName = {};
ancestors.forEach((person) => { byName[person.name] = person });

console.log(byName);