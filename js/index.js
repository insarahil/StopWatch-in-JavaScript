let hrs = 0;
let mins = 0;
let secs = 0;
let mils = 0;

let hours = document.querySelector(".hrs");
let minutes = document.querySelector(".mins");
let seconds = document.querySelector(".secs");
let miliSeconds = document.querySelector(".mils");

let btnStart = document.querySelector(".start");
let btnPause = document.querySelector(".stop");
let btnReset = document.querySelector(".reset");

function milss() {
  mils++;
  miliSeconds.innerHTML = mils;
  if (mils < 10) {
    miliSeconds.innerHTML = "0" + mils;
  }
  if (mils >= 100) {
    secs++;
    seconds.innerHTML = secs;
    mils = "0" + 0;
    if (secs < 10) {
      seconds.innerHTML = "0" + secs;
    }
  } else if (secs >= 60) {
    mins++;
    minutes.innerHTML = mins;
    secs = "0" + 0;
    if (mins < 10) {
      minutes.innerHTML = "0" + mins;
    }
  } else if (minutes >= 60) {
    hrs++;
    hours.innerHTML = hrs;
    minutes = "0" + 0;
    if (hrs < 10) {
      hours.innerHTML = "0" + hrs;
    }
  }
}

btnStart.addEventListener("click", function f() {
  interval = setInterval(milss, 10);
});

btnPause.addEventListener("click", function ff() {
  clearInterval(interval);
});

btnReset.addEventListener("click", function reset() {
  hrs = "0" + 0;
  mins = "0" + 0;
  secs = "0" + 0;
  mils = "0" + 0;
  hours.innerHTML = hrs;
  minutes.innerHTML = mins;
  seconds.innerHTML = secs;
  miliSeconds.innerHTML = mils;
  clearInterval(interval);
});
