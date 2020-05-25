//jshint esversion: 6
let currBPM = 0;

function metronome(bpm) {
  currBPM = bpm;

  var tick1 = new Audio("src/audio/tick1.wav");
  var tick = new Audio("src/audio/tick2.wav");
  console.log("click wrong func");

  let timebetween = 60 / bpm * 1000;

  console.log(timebetween);

  let beat = 1;

  let beats = setInterval(function() {
    if (currBPM != bpm) {
      clearInterval(beats);
    }
    if (beat%4 == 1) {
      tick1.play(tick1);
    } else {
      tick.play(tick);
    }
    beat++;
  }, timebetween);
}
