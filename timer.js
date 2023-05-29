// Timer
var timerInterval;
var timerSeconds = 0;
var timerMinutes = 0;
var timerHours = 0;
var timerDisplay = document.getElementById("timer");

function start() {
  timerInterval = setInterval(updateTimer, 1000);
}

function stop() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  timerMinutes = 0;
  timerHours = 0;
  updateTimerDisplay();
}

function updateTimer() {
  timerSeconds++;
  if (timerSeconds === 60) {
    timerSeconds = 0;
    timerMinutes++;
    if (timerMinutes === 60) {
      timerMinutes = 0;
      timerHours++;
    }
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  var hoursString = padZero(timerHours);
  var minutesString = padZero(timerMinutes);
  var secondsString = padZero(timerSeconds);
  timerDisplay.textContent = hoursString + ":" + minutesString + ":" + secondsString;
}

// Stopwatch
var stopwatchInterval;
var stopwatchSeconds = 0;
var stopwatchMinutes = 0;
var stopwatchHours = 0;
var stopwatchDisplay = document.getElementById("stopwatch");

function startStopwatch() {
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  stopwatchHours = 0;
  updateStopwatchDisplay();
}

function updateStopwatch() {
  stopwatchSeconds++;
  if (stopwatchSeconds === 60) {
    stopwatchSeconds = 0;
    stopwatchMinutes++;
    if (stopwatchMinutes === 60) {
      stopwatchMinutes = 0;
      stopwatchHours++;
    }
  }
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  var hoursString = padZero(stopwatchHours);
  var minutesString = padZero(stopwatchMinutes);
  var secondsString = padZero(stopwatchSeconds);
  stopwatchDisplay.textContent = hoursString + ":" + minutesString + ":" + secondsString;
}

function padZero(value) {
  return value < 10 ? "0" + value : value;
}
