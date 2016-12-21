/* trzy tryby: inactive, work, break -
kolor trybu inactive: #BDBDBD
kolor trybu active: main: #00BCD4 bar: #00cfd4;
kolor trybu break: main: #FF5722 bar: #ff5a26
tryb wpływa na kolor przycisku play, pozostalego czasu, baru, kropki, tła
do zrobienia: przetwarzanie czasu, dodanie dzwieków
*/
let body = document.body;
let sliders = document.getElementsByClassName("sliders");
let progressCircle = document.querySelector(".progressCircle");
let progressDot = window.getComputedStyle(progressCircle, ':before');
let timeLeft = document.querySelector(".timeLeft");
let playButton = document.querySelector(".btn-success");
let playButtonHover = window.getComputedStyle(playButton, ':hover');
let playButtonFocus = window.getComputedStyle(playButton, ':focus');
let pomodoroCss = document.styleSheets[2];
let shadeColor = function(color, percent) {
    let f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
};
console.log(progressDot);

class Theme {
    constructor(mainColor, subColor) {
        this.mainColor = mainColor;
        this.subColor = subColor;
    }
    active() {
        let thisMainColor = this.mainColor;
        body.style.backgroundColor = this.mainColor;
        [].forEach.call(sliders, function(slider) {
            slider.style.backgroundColor = thisMainColor;
        });
        progressCircle.style.borderColor = this.mainColor;
        pomodoroCss.addRule(".progressCircle:before","background-color: " + this.mainColor);
        timeLeft.style.color = this.mainColor;
        playButton.style.backgroundColor = this.mainColor;
        playButton.style.borderColor = this.mainColor;
        document.styleSheets[1].addRule(".btn-success:hover", "background-color: " + "#FFFFFF");
        document.styleSheets[1].addRule(".btn-success:focus", "background-color: " + "#FFFFFF");
    }

}

$(document).ready(function() {
    "use strict";
   $(".timeLeft").text(`${$(".sessionTime").text().trim()}:00`);
    let orangeTheme = new Theme("#FF5722", "#fc5925");
    orangeTheme.active();
});
