/* trzy tryby: inactive, work, break -
 kolor trybu inactive: #BDBDBD
 kolor trybu active: main: #00BCD4 bar: #00cfd4;
 kolor trybu break: main: #FF5722 bar: #ff5a26
 do zrobionia: eventy dla końca pomodoro i końca breaka, obsługa pauzy, dźwięki
 */
"use strict";
let body = document.body;
let sliders = document.getElementsByClassName("sliders");
let pomodoroObj = [
    Array.prototype.slice.call(sliders[0].parentNode.childNodes)[3].className,
    new Event("pomodoroExpired")
];
let breakObj = [
   Array.prototype.slice.call(sliders[2].parentNode.childNodes)[3].className,
   new Event("breakExpired")
];
let progressCircle = document.querySelector(".progressCircle");
let timeLeftDisplay = document.querySelector(".timeLeftDisplay");
let playButton = document.querySelector(".btn-play");
let pomodoroCss = document.styleSheets[2];
let shadeColor = function (color, percent) {
  let f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
  return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
};


$(document).ready(function () {
  let orangeTheme = new Theme("#FF5722");
  let blueTheme = new Theme("#00BCD4");
  let greenTheme = new Theme ("#4CAF50");
  
  document.addEventListener("pomodoroExpired", function (e) {
    startNextRound(breakObj);
    blueTheme.active();
  }, false);
  document.addEventListener("breakExpired", function (e) {
    greenTheme.active();
    toggleActionButton($(".btn-warning"));
  }, false);

  greenTheme.active();

  $(".timeLeftDisplay").text(formatTime($('.pomodoroTime').text(), null));
  $(".sliders").click(modifyTimeWithSlider);
  $(".buttons").on("click", ".btn-play", function () {
    let thisBtn = $(this);
    orangeTheme.active();
    startNextRound(pomodoroObj);
    toggleActionButton(thisBtn);
  });
});


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
    timeLeftDisplay.style.color = mainColor;
    playButton.style.backgroundColor = shadeColor(mainColor, 0.2);
    playButton.style.borderColor = shadeColor(mainColor, 0.2);
    pomodoroCss.addRule(".btn-play:hover", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
    pomodoroCss.addRule(".btn-play:focus", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
  }

}

// two types of round: Pomodoro and Break
function startNextRound(roundObject) {
  let currentSetTime = document.querySelector(`.${roundObject[0]}`);
  if (currentSetTime.innerHTML.length < 2) {
    currentSetTime = `0${currentSetTime.innerHTML}:00`;
  }
  let minutesLeft = currentSetTime.substring(0, 2);
  let secondsLeft = currentSetTime.substring(3);
  let roundExpirationEvent = roundObject[1];
  decreaseMinutesLeft();
  decreaseSecondsLeft();
  enableDotAnimation();
  let minutesInterval = setInterval(decreaseMinutesLeft, 60000);
  let secondsInterval = setInterval(decreaseSecondsLeft, 1000);

  function enableDotAnimation() {
    pomodoroCss.insertRule(`.progressCircle { -webkit-animation: single10anim 60s infinite linear !important; }`, pomodoroCss.rules.length);
    pomodoroCss.insertRule(`.progressCircle { animation: single10anim 60s infinite linear !important; }`, pomodoroCss.rules.length);
  }

  function disableDotAnimation() {
    pomodoroCss.insertRule(`.progressCircle { -webkit-animation: none !important; animation: none !important; }`, pomodoroCss.rules.length);
  }

  function decreaseMinutesLeft() {
    minutesLeft = minutesLeft - 1;
    timeLeftDisplay.innerHTML = formatTime(minutesLeft, secondsLeft);
    minutesLeft = timeLeftDisplay.innerHTML.substring(0, timeLeftDisplay.innerHTML.indexOf(':'));
  }

  function decreaseSecondsLeft() {
    if (secondsLeft == "00") {
      secondsLeft = "59";
    } else {
      secondsLeft = secondsLeft - 1;
    }
    timeLeftDisplay.innerHTML = formatTime(minutesLeft, secondsLeft);
    secondsLeft = timeLeftDisplay.innerHTML.substring(timeLeftDisplay.innerHTML.indexOf(':') + 1);
    checkTimeExpiration(roundExpirationEvent);
  }

  function checkTimeExpiration(expirationEvent) {
    if (minutesLeft == "00" && secondsLeft == "00") {
      clearInterval(minutesInterval);
      clearInterval(secondsInterval);
      disableDotAnimation();
      document.dispatchEvent(expirationEvent);
    }
  }
}
function formatTime(minutes, seconds) {
  let args = Array.prototype.slice.call(arguments);
  args.forEach(function (arg, index, array) {
    if (arg == null || arg == undefined) {
      array[index] = "00";
    } else if (String(arg).length < 2) {
      array[index] = `0${arg}`;
    }

  });
  return `${args[0]}:${args[1]}`;
}

function modifyTimeWithSlider(slider) {
  let timer = Array.prototype.slice.call(this.parentNode.childNodes);
  let clickedSlider = slider.target;
  let currentTime = document.querySelector(`.${timer[3].className}`);
  timer.forEach(function (el, i) {
    if (clickedSlider.className == el.className) {
      if (i < 3) {
        currentTime.innerHTML = currentTime.innerHTML - 1;
      } else {
        currentTime.innerHTML = Number(currentTime.innerHTML) + 1;
      }
    }
  });
  $(".timeLeftDisplay").text(formatTime(currentTime.innerHTML, null));
}
function toggleActionButton(btn) {
  if (btn.hasClass("btn-play")) {
    btn.removeClass("btn-play").toggleClass("btn-warning");
    btn.html("<i class=\"fa fa-pause\">");
  } else {
    btn.removeClass("btn-warning").toggleClass("btn-play");
    btn.html("<i class=\"fa fa-play\">");
  }
}

