/**
 * Created by Marcin on 30.11.2016.
 */
var Person = function(firstAndLast) {
    var name - firstAndLast;
    this.getFirstName = function() {
        return name.substring(0, name.indexOf(" "));
    }; this.getLastName = function() {
        return name.substring(name.indexOf(" ") + 1);
    }; this.getFullName = function() {
        return name;
    }; this.setFirstName = function(first) {
        name = first + " " + getLastName();
    }; this.setLastName = function(last) {
        name = getFirstName() + last;
    }; this.setFullName = function(firstAndLast) {
        name = firstAndLast;
    };
}
let bob = new Person("Bob Ross");
console.log(Object.keys(bob))
