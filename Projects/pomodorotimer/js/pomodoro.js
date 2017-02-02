/* trzy tryby: inactive, work, break -
 kolor trybu inactive: #BDBDBD
 kolor trybu active: main: #00BCD4 bar: #00cfd4;
 kolor trybu break: main: #FF5722 bar: #ff5a26
 tryb wpływa na kolor przycisku play, pozostalego czasu, baru, kropki, tła
 do zrobienia: napraw interwały
 */
let body = document.body;
let sliders = document.getElementsByClassName("sliders");
let progressCircle = document.querySelector(".progressCircle");
let timeLeft = document.querySelector(".timeLeft");
let playButton = document.querySelector(".btn-play");
let pomodoroCss = document.styleSheets[2];
let shadeColor = function (color, percent) {
    let f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
};

class Theme {
    constructor(mainColor) {
        this.mainColor = mainColor;
    }

    active() {
        let mainColor = this.mainColor;
        body.style.backgroundColor = mainColor;
        [].forEach.call(sliders, function (slider) {
            slider.style.backgroundColor = shadeColor(mainColor, 0.2);
        });
        pomodoroCss.addRule(".sliders:hover", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
        progressCircle.style.borderColor = mainColor;
        pomodoroCss.addRule(".progressCircle:before", "background-color: " + mainColor);
        timeLeft.style.color = mainColor;
        playButton.style.backgroundColor = shadeColor(mainColor, 0.2);
        playButton.style.borderColor = shadeColor(mainColor, 0.2);
        pomodoroCss.addRule(".btn-play:hover", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
        pomodoroCss.addRule(".btn-play:focus", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
    }

}
function startSession() {
    let timeLeftObj = {
        minutesLeft: timeLeft.innerHTML.substring(0, timeLeft.innerHTML.indexOf(':')),
        secondsLeft: timeLeft.innerHTML.substring(timeLeft.innerHTML.indexOf(':') + 1)
    };

    let minutesInterval = setInterval(decreaseTimeLeft(timeLeftObj, "minutesLeft"), 60000);
    let secondsInterval = setInterval(decreaseTimeLeft(timeLeftObj, "secondsLeft"), 1000);
    enableDotAnimation();

    timeLeft.innerHTML = formatTime(timeLeftObj["minutesLeft"], timeLeftObj["secondsLeft"]);
    if (timeLeftObj["minutesLeft"] == "00" && timeLeftObj["secondsLeft"] == "00") {
            clearInterval(minutesInterval);
            clearInterval(secondsInterval);
            disableDotAnimation();

    }

    function enableDotAnimation() {
        pomodoroCss.insertRule(`.progressCircle { -webkit-animation: single10anim ${timeLeftObj["minutesLeft"] * 60}s infinite linear !important; }`, pomodoroCss.rules.length);
        pomodoroCss.insertRule(`.progressCircle { animation: single10anim ${timeLeftObj["minutesLeft"] * 60}s infinite linear !important; }`, pomodoroCss.rules.length);
    }

    function disableDotAnimation() {
        pomodoroCss.insertRule(`.progressCircle { -webkit-animation: none !important; animation: none !important; }`, pomodoroCss.rules.length);
    }

}

function decreaseTimeLeft(timeLeft, timeUnit) {
    "use strict";
    if (timeLeft[timeUnit] == "00" && timeUnit == "secondsLeft") {
        timeLeft[timeUnit] = "59";
    } else {
        timeLeft[timeUnit] = timeLeft[timeUnit] - 1;
    }
}
function modifyTime(slider) {
    "use strict";
    let timer = Array.prototype.slice.call(this.parentNode.childNodes);
    let clickedSlider = slider.target;
    let currentTime = document.querySelector(`.${timer[3].className}`);
    timer.forEach(function(el, i) {
        if (clickedSlider.className == el.className) {
            if (i < 3) {
                currentTime.innerHTML = currentTime.innerHTML - 1;
            } else {
                currentTime.innerHTML = Number(currentTime.innerHTML) + 1;
            }
        }
    });
    $(".timeLeft").text(formatTime(currentTime.innerHTML, null));
}
function formatTime(minutes, seconds) {
    "use strict";
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(arg, index, array) {
        if (arg == null || arg == undefined) {
            array[index] = "00";
        } else if (String(arg).length < 2) {
            array[index] = `0${arg}`;
        }

    });
    return `${args[0]}:${args[1]}`;

}
$(document).ready(function () {
    "use strict";
    $(".timeLeft").text(formatTime($('.sessionTime').text(), null));
    let orangeTheme = new Theme("#FF5722");
    orangeTheme.active();
    $(".btn-play").click(startSession);
    $(".sliders").click(modifyTime);
});
