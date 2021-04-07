'use strict'

let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;


let startTime;
let elapsedTime = 0;
let timerId;
let timeToadd = 0;

function updateTimetText(){
  milliseconds++;
    if(milliseconds / 100 == 1){
    seconds++;
    milliseconds = 0;
      if(seconds /  60 == 1){
      minutes++;
      seconds = 0;
        if(minutes / 60 == 1){
        hours++;
        minutes = 0;
      }
    }
  }
  timer.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}

function countUp(){
  timerId = setTimeout(function(){
    elapsedTime = Date.now - startTime + timeToadd;
    updateTimetText();
    countUp();
  },10);
}

start.addEventListener('click', function(){
  startTime = Date.now();
  countUp();
});

stop.addEventListener('click', function(){
  clearTimeout(timerId);
  timeToadd += Date.now() - startTime;
});

reset.addEventListener('click', function(){
  elapsedTime = 0;
  timeToadd = 0;
  timer.innerHTML = "0:0:0:0";
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
});



  
  
