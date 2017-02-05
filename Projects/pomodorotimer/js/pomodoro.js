"use strict";
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
    pomodoroStylesheet.addRule(".sliders:hover", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
    progressCircle.style.borderColor = mainColor;
    pomodoroStylesheet.addRule(".progressCircle:before", "background-color: " + mainColor);
    timeLeftDisplay.style.color = mainColor;
    playButton.style.backgroundColor = shadeColor(mainColor, 0.2);
    playButton.style.borderColor = shadeColor(mainColor, 0.2);
    pomodoroStylesheet.addRule(".btn-play:hover", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
    pomodoroStylesheet.addRule(".btn-play:focus", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
  }
}
const body = document.body;
const sliders = document.getElementsByClassName("sliders");
const progressCircle = document.querySelector(".progressCircle");
const timeLeftDisplay = document.querySelector(".timeLeftDisplay");
const playButton = document.querySelector(".btn-play");
const pomodoroStylesheet = document.styleSheets[2];
const shadeColor = function (color, percent) {
  let f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
  return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
};
const defaultTheme = new Theme("#4CAF50");

const pomodoroRound = {
  roundTime: Array.prototype.slice.call(sliders[0].parentNode.childNodes)[3].className,
  event: new Event("pomodoroExpired"),
  theme: new Theme("#FF5722")
};
const breakRound = {
  roundTime: Array.prototype.slice.call(sliders[2].parentNode.childNodes)[3].className,
  event: new Event("breakExpired"),
  theme: new Theme("#00BCD4")
};
let pauseRound = {
  roundTime: "timeLeftDisplay",
  event: new Event("pomodoroExpired"),
  theme: new Theme("#BDBDBD"),
  lastActiveRound: null
};

$(document).ready(function () {
  defaultTheme.active();
  $(".timeLeftDisplay").text(formatTime($('.pomodoroTime').text(), null));
  $(".sliders").click(modifyTimeWithSlider);
  $(".buttons").on("click", ".btn-play", function () {
    let thisBtn = $(this);
    if (thisBtn.hasClass("afterPause")) {
      pauseRound.lastActiveRound.roundTime = "timeLeftDisplay";
      activateRound(pauseRound.lastActiveRound);
    } else {
      activateRound(pomodoroRound);
    }
    toggleActionButton(thisBtn);
  });
  $(".buttons").on("click", ".btn-warning", function () {
    let thisBtn = $(this);
    pauseRound.theme.active();
    clearAllIntervals();
    pomodoroStylesheet.insertRule(`.progressCircle { -webkit-animation-play-state: paused !important;
                                              animation-play-state: paused !important; }`, pomodoroStylesheet.rules.length);
    thisBtn.addClass("afterPause");
    if (pauseRound.lastActiveRound == null) {
      pauseRound.lastActiveRound = pomodoroRound;
    }
    toggleActionButton(thisBtn);
  })
});

function activateRound(roundObject) {
  roundObject.theme.active();
  let roundSetTime = document.querySelector(`.${roundObject["roundTime"]}`).innerHTML;
  if (roundSetTime.length <= 2) {
    roundSetTime = formatTime(roundSetTime, null);
  }
  let minutesLeft = roundSetTime.substring(0, 2);
  let secondsLeft = roundSetTime.substring(3);
  let roundExpirationEvent = roundObject["event"];
  decreaseMinutesLeft();
  decreaseSecondsLeft();
  enableDotAnimation();
  let minutesInterval = window.setInterval(decreaseMinutesLeft, 60000);
  let secondsInterval = window.setInterval(decreaseSecondsLeft, 1000);

  function enableDotAnimation() {
    pomodoroStylesheet.insertRule(`.progressCircle { -webkit-animation: single10anim 60s infinite linear !important; 
                                              animation: single10anim 60s infinite linear !important; }`, pomodoroStylesheet.rules.length);
  }

  function disableDotAnimation() {
    pomodoroStylesheet.insertRule(`.progressCircle { -webkit-animation: none !important; animation: none !important; }`, pomodoroStylesheet.rules.length);
  }

  function decreaseMinutesLeft() {
    if (Number(minutesLeft) >= 1) {
      minutesLeft = minutesLeft - 1;
    }
    timeLeftDisplay.innerHTML = formatTime(minutesLeft, secondsLeft);
  }

  function decreaseSecondsLeft() {
    if (secondsLeft == "00") {
      secondsLeft = "59";
    } else {
      secondsLeft = secondsLeft - 1;
    }
    timeLeftDisplay.innerHTML = formatTime(minutesLeft, secondsLeft);
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
  let timeUnits = Array.prototype.slice.call(arguments);
  timeUnits.forEach(function (unit, index, units) {
    if (unit == null || unit == undefined) {
      units[index] = "00";
    } else if (String(unit).length < 2) {
      units[index] = `0${unit}`;
    }

  });
  return `${timeUnits[0]}:${timeUnits[1]}`;
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
function clearAllIntervals() {
  for (let i = 0; i < 9999; i++) {
    window.clearInterval(i);
  }
}

function setLastActiveRound(round) {
  pauseRound.lastActiveRound = round;
  pauseRound.lastActiveRound.roundTime = round.roundTime;
}

document.addEventListener("pomodoroExpired", function (e) {
  setLastActiveRound(breakRound);
  activateRound(breakRound);

}, false);

document.addEventListener("breakExpired", function (e) {
  setLastActiveRound(breakRound);
  defaultTheme.active();
  toggleActionButton($(".btn-warning"));
}, false);