function Rabbit(type) {
    "use strict";
    this.type = type;
}
let killerRabbit = new Rabbit("Zabójczy");
let blackRabbit = new Rabbit("Czarny");

Rabbit.prototype.speak = function(line) {
    "use strict";
    console.log(`${this.type} królik mówi: "${line}"`);
}
blackRabbit.speak("yoyonigga");
killerRabbit.speak("ARGHHHH!");

Rabbit.prototype.teeth = "małe";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "długie, ostre i zbroczone krwią";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1, 2].toString());
console.log(Object.prototype.toString.call([1, 2]));

Rabbit.prototype.dance = function() {
    console.log(`${this.type} królik tańczy gigę.`);
}
blackRabbit.dance();

Object.defineProperty(Rabbit.prototype, "ukrytaBzdura", { enumerable: false, value: "cześć" });
for (prop in blackRabbit) {
    if (blackRabbit.hasOwnProperty(prop))
    console.log(prop);
}
console.log(blackRabbit.ukrytaBzdura);