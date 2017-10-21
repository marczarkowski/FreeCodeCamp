/**
 * Created by Marcin on 03.12.2016.
 */
let rabbit = {};
rabbit.speak = function(line) {
    "use strict";
    console.log(`Królik mówi: "${line}"`);
}
rabbit.speak("Ja żyję!");

function speak(line) {
    "use strict";
    console.log(`${this.type} królik mówi: "${line}"`);
}

let whiteRabbit = { type: "Biały", speak: speak };
let fatRabbit = { type: "Gruby", speak: speak };
whiteRabbit.speak("Niech to dunder świśnie");
fatRabbit.speak("Ach niech mnie kule bijo");

speak.apply(fatRabbit, ["Swaaag w sobie mam!"]);
speak.apply({type: "Gruuubas"}, ["ojaciejacie"]);

speak.call(whiteRabbit, "Zima nadchodzi");
speak.call({type: "Zimowy"}, "Bez kitu, typo");