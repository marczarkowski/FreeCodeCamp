/**
 * Created by Marcin on 30.11.2016.
 */
let Person = function(firstAndLast) {
    this.getFirstName = function() {
        return this.name.substring(0, this.name.indexOf(" "));
    }; this.getLastName = function() {
        return this.name.substring(this.name.indexOf(" ") + 1);
    }; this.getFullName = function() {
        return this.name;
    }; this.setFirstName = function(first) {
        this.name = `${first} ${this.getLastName()}`;
    }; this.setLastName = function(last) {
        this.name = `${this.getFirstName()}  ${last}`;
    }; this.setFullName = function(firstAndLast) {
        this.name = firstAndLast;
    };
}