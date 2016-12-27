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
let timeLeft = document.querySelector(".timeLeft");
let playButton = document.querySelector(".btn-play");
let pomodoroCss = document.styleSheets[2];
let shadeColor = function(color, percent) {
    let f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
};

class Theme {
    constructor(mainColor) {
        this.mainColor = mainColor;
    }
    active() {
        let mainColor = this.mainColor;
        body.style.backgroundColor = mainColor;
        [].forEach.call(sliders, function(slider) {
            slider.style.backgroundColor = shadeColor(mainColor, 0.2);
        });
        pomodoroCss.addRule(".sliders:hover", `background-color: ${shadeColor(mainColor, -0.1)} !important`)
        progressCircle.style.borderColor = mainColor;
        pomodoroCss.addRule(".progressCircle:before","background-color: " + mainColor);
        timeLeft.style.color = mainColor;
        playButton.style.backgroundColor = shadeColor(mainColor, 0.2);
        playButton.style.borderColor = shadeColor(mainColor, 0.2);
        pomodoroCss.addRule(".btn-play:hover", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
        pomodoroCss.addRule(".btn-play:focus", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
    }

}
function startSession() {
    "use strict";
    function decreaseMinutesLeft() {
        let minutesLeft = timeLeft.innerHTML.substring(0, timeLeft.innerHTML.indexOf(':'));
        let secondsLeft = timeLeft.innerHTML.substring( timeLeft.innerHTML.indexOf(':') + 1);
        minutesLeft = minutesLeft - 1;
        minutesLeft = "0" + String(minutesLeft);
        timeLeft.innerHTML = `${minutesLeft}:${secondsLeft}`;
    }
    function decreaseSecondsLeft() {
        let minutesLeft = timeLeft.innerHTML.substring(0, timeLeft.innerHTML.indexOf(':'));
        let secondsLeft = timeLeft.innerHTML.substring(timeLeft.innerHTML.indexOf(':') + 1);
        if (secondsLeft == "00") {
            secondsLeft = "59";
        } else {
            secondsLeft = secondsLeft - 1;
            if (String(secondsLeft).length < 2) {
                secondsLeft = "0" + secondsLeft;
            }
        }
        timeLeft.innerHTML = `${minutesLeft}:${secondsLeft}`;
        if (minutesLeft == "00" && secondsLeft == "00") {
            clearInterval(minutesInterval);
            clearInterval(secondsInterval);
            disableDotAnimation();
        }
    }
    function enableDotAnimation() {
        let minutesLeft = timeLeft.innerHTML.substring(0, timeLeft.innerHTML.indexOf(':'));
        pomodoroCss.addRule(".progressCircle", `-webkit-animation: single10anim ${minutesLeft * 60}s infinite linear !important`);
        pomodoroCss.addRule(".progressCircle", `animation: single10anim ${minutesLeft * 60}s infinite linear !important`);
    }
    function disableDotAnimation() {
        progressCircle.style.removeProperty('-webkit-animation');
        progressCircle.style.removeProperty('animation');
    }

    enableDotAnimation();
    decreaseMinutesLeft();
    decreaseSecondsLeft();
    let minutesInterval = setInterval(decreaseMinutesLeft, 60000);
    let secondsInterval = setInterval(decreaseSecondsLeft, 1000);
}
$(document).ready(function() {
    "use strict";
   $(".timeLeft").text(`${$(".sessionTime").text().trim()}:00`);
    let orangeTheme = new Theme("#FF5722");
    orangeTheme.active();
    $(".btn-play").click(startSession);
});
