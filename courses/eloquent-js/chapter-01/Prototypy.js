/**
 * Created by Marcin on 03.12.2016.
 */
let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf(empty) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

let protoRabbit = {
    speak: function(line) {
        "use strict";
        console.log(`${this.type} królik mówi: " ${line}"`)
    }
}
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Zabójczy";
killerRabbit.speak("ARGHHHH!");
