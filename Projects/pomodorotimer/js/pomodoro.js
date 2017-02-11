"use strict";
class Theme {
  constructor(mainColor, slidersState) {
    this.mainColor = mainColor;
  }

  active() {
    let mainColor = this.mainColor;
    document.body.style.backgroundColor = mainColor;
    [].forEach.call(sliders, function (slider) {
      slider.style.backgroundColor = shadeColor(mainColor, 0.2);
    });
    pomodoroStylesheet.addRule(".sliders:hover", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
    document.querySelector(".progressCircle").style.borderColor = mainColor;
    pomodoroStylesheet.addRule(".progressCircle:before", "background-color: " + mainColor);
    timeLeftDisplay.style.color = mainColor;
    document.querySelector(".buttons > button").style.backgroundColor = shadeColor(mainColor, 0.2);
    document.querySelector(".buttons > button").style.borderColor = shadeColor(mainColor, 0.2);
    pomodoroStylesheet.addRule(".btn-play:hover", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
    pomodoroStylesheet.addRule(".btn-play:focus", `background-color: ${shadeColor(mainColor, -0.1)} !important`);
  }
}
const timeManagement = $(".timerValues");
const sliders = document.getElementsByClassName("sliders");
const timeLeftDisplay = document.querySelector(".timeLeftDisplay");
const pomodoroStylesheet = document.styleSheets[2];
const shadeColor = function (color, percent) {
  let f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
  return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
};
const defaultTheme = new Theme("#4CAF50");

const pomodoroRound = {
  roundTimeSelector: document.querySelector(`.${Array.prototype.slice.call(sliders[0].parentNode.childNodes)[3].className}`),
  event: new Event("pomodoroExpired"),
  theme: new Theme("#FF5722")
};
const breakRound = {
  roundTimeSelector: document.querySelector(`.${Array.prototype.slice.call(sliders[2].parentNode.childNodes)[3].className}`),
  event: new Event("breakExpired"),
  theme: new Theme("#00BCD4")
};
let pauseRound = {
  roundTimeSelector: timeLeftDisplay,
  event: new Event("pomodoroExpired"),
  theme: new Theme("#BDBDBD"),
  lastActiveRound: null
};

$(document).ready(function () {
  defaultTheme.active();
  $(".timeLeftDisplay").text(formatTime(pomodoroRound.roundTimeSelector.innerHTML, null));
  $(".sliders").click(modifyTimeWithSlider);
  $(".buttons").on("click", ".btn-play", function () {
    if ($(this).hasClass("afterPause")) {
      activateRound(pauseRound.lastActiveRound);
    } else {
      activateRound(pomodoroRound);
      timeManagement.removeClass("enabled");
    }
    toggleActionButton($(this));
  });
  $(".buttons").on("click", ".btn-warning", function () {
    pauseRound.theme.active();
    clearAllIntervals();
    pomodoroStylesheet.insertRule(`.progressCircle { -webkit-animation-play-state: paused !important;
                                              animation-play-state: paused !important; }`, pomodoroStylesheet.rules.length);
    $(this).addClass("afterPause");
    setLastActiveRound();
    toggleActionButton($(this));
  });
  $(".buttons").on("click", ".btn-danger", function () {
    defaultTheme.active();
    clearAllIntervals();
    activateRound.disableDotAnimation();
    toggleActionButton($(".btn-warning"));
    updateTimeLeft(pomodoroRound.roundTimeSelector.innerHTML, null);
    timeManagement.addClass("enabled");
  })
});

function activateRound(roundObject) {
  roundObject.theme.active();
  let roundTime = roundObject.roundTimeSelector.innerHTML;
  if (roundTime.length <= 2) {
    roundTime = formatTime(roundTime, null);
  }
  let minutesLeft = roundTime.substring(0, 2);
  let secondsLeft = roundTime.substring(3);
  let roundExpirationEvent = roundObject["event"];
  decreaseMinutesLeft();
  decreaseSecondsLeft();
  enableDotAnimation();
  const minutesInterval = window.setInterval(decreaseMinutesLeft, 60000);
  const secondsInterval = window.setInterval(decreaseSecondsLeft, 1000);

  function enableDotAnimation() {
    pomodoroStylesheet.insertRule(`.progressCircle { -webkit-animation: single10anim 60s infinite linear !important; 
                                              animation: single10anim 60s infinite linear !important; }`, pomodoroStylesheet.rules.length);
  }

  function disableDotAnimation() {
    pomodoroStylesheet.insertRule(`.progressCircle { -webkit-animation: none !important; animation: none !important; }`, pomodoroStylesheet.rules.length);
  }

  activateRound.disableDotAnimation = disableDotAnimation;

  function decreaseMinutesLeft() {

    if (Number(minutesLeft) >= 1 && secondsLeft == "00") {
      minutesLeft = minutesLeft - 1;
    }
    updateTimeLeft(minutesLeft, secondsLeft);
  }

  function decreaseSecondsLeft() {
    secondsLeft = secondsLeft == "00" ? "59" : secondsLeft - 1;
    updateTimeLeft(minutesLeft, secondsLeft);
    checkTimeExpiration(roundExpirationEvent);
  }

  function checkTimeExpiration(expirationEvent) {
    const isRoundOver = minutesLeft == "00" && secondsLeft == "00";
    if (isRoundOver) {
      clearInterval(minutesInterval);
      clearInterval(secondsInterval);
      disableDotAnimation();
      document.dispatchEvent(expirationEvent);
    }
  }
}
function formatTime(minutes, seconds) {
  let timeUnits = Array.prototype.slice.call(arguments).map((unit) => {
    if (!unit) {
      return "00";
    } else if (String(unit).length < 2) {
      return `0${unit}`;
    }
    return unit;
  });
  return `${timeUnits[0]}:${timeUnits[1]}`;
}
// zamień forEach na filter -> map
function modifyTimeWithSlider(slider) {
  let timer = Array.prototype.slice.call(this.parentNode.childNodes);
  const clickedSlider = slider.target;
  let currentTime = document.querySelector(`.${timer[3].className}`);
  timer.forEach(function (slider, i) {
    if (clickedSlider.className == slider.className && timeManagement.hasClass("enabled")) {
      if (i < 3 && currentTime.innerHTML > 1) {
        currentTime.innerHTML = currentTime.innerHTML - 1;
      } else if (i > 3) {
        currentTime.innerHTML = Number(currentTime.innerHTML) + 1;
      }
      updateTimeLeft(currentTime.innerHTML, null);
    }
  });
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

function updateTimeLeft(minutesLeft, secondsLeft) {
  timeLeftDisplay.innerHTML = formatTime(minutesLeft, secondsLeft);
}

function clearAllIntervals() {
  for (let i = 0; i < 9999; i++) {
    window.clearInterval(i);
  }
}
function setLastActiveRound(round = pomodoroRound) {
  pauseRound.lastActiveRound = jQuery.extend(true, {}, round);
  pauseRound.lastActiveRound.roundTimeSelector = timeLeftDisplay;
}

document.addEventListener("pomodoroExpired", function (e) {
  setLastActiveRound(breakRound);
  activateRound(breakRound);
}, false);

document.addEventListener("breakExpired", function (e) {
  setLastActiveRound();
  defaultTheme.active();
  toggleActionButton($(".btn-warning"));
  timeManagement.addClass("enabled");
  updateTimeLeft(pomodoroRound.roundTimeSelector.innerHTML, null);
}, false);

function playSound(filename){
  document.getElementById("sound").innerHTML='<audio autoplay="autoplay"><source src="' + filename + '.mp3" type="audio/mpeg" /><source src="' + filename + '.ogg" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="' + filename +'.mp3" /></audio>';
}