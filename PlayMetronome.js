//jshint esversion: 6
import React from "react";
import ReactDOM from "react-dom";

// sound
import Sound from "react-sound";
import UIfx from 'uifx';

// Ticks
import tick1 from "./src/audio/tick1.wav";
import tick from "./src/audio/tick2.wav";


class PlayMetronome extends React.Component {
  constructor(props) {
    super(props); // Must call
    this.state = {
      item: 2,
      firstBeat: new UIfx(
        tick1,
        {
          volume: 1.0,
          throttleMs: 100
        }
      ),
      otherBeats: new UIfx(
        tick,
        {
          volume: 0.5,
          throttleMs: 100
        }
      )
    };
  }

  metronome(props) {
    let currBPM = this.props.bpm;
    console.log("\tPlaying the beat at " + currBPM + " BPM");

    // Get ticks
    let tick1 = this.state.firstBeat;
    let tick = this.state.otherBeats;

    // this.state.firstBeat.play();
    // tick1.play();



/* SetInterval Approach (approach 1): */
    // get time between clicks
    let timebetween = 60 / currBPM * 1000;

    // Initialize count
    let beat = 1;

    let beats = setInterval(function() {
      if (beat%4 == 1) {
        tick1.play();
        console.log("Beat one for " + currBPM + " BPM");
      } else {
        tick.play();
      }
      beat++;
    }, timebetween);
/**/
  }

  render() {
    // HOW TO PLAY THE BEAT
    // this.state.firstBeat.play();
    console.log("RENDERING PLAY METRONOME");

    this.metronome(this);

    return [

    ];
  }
}

export default PlayMetronome;



/*

OLD CODE:

// function metronome(props) {
//   let currBPM = props.bpm;
//
//   console.log("Setting bpm: " + props.bpm);
//   bpmChange(props);
//
//   console.log("--------------------click");
//   console.log("currBPM: " + currBPM);
//   console.log("Tick1 file: " + tick1);
//   let timebetween = 60 / currBPM * 1000;
//   console.log("Time between ticks(ms): " + timebetween);
//
//   // Gather sounds
//   var tickOne = new UIfx(
//     tick1,
//     {
//       volume: 1.0,
//       throttleMs: 100
//     }
//   );
//   var tickNorm = new UIfx(
//     tick,
//     {
//       volume: 0.8,
//       throttleMs: 100
//     }
//   );
//
//   // Initialize count
//   let beat = 1;
//
//   let beats = setInterval(function() {
//     if (beat%4 == 1) {
//       tickOne.play();
//     } else {
//       tickNorm.play();
//     }
//     beat++;
//   }, timebetween);
// }



// DELETE THIS----------------------
// let vol = 0.6;


// const tickFirst = new UIfx(
//   tick1,
//   {
//     volume: 1.0,
//     throttleMs: 100
//   }
// )
// DELETE THIS^^^^^^^^^^^^^^^^^^^^^^^


// tick1: <Sound url={tick1}
//   playStatus={Sound.status.PLAYING}
//   playFromPosition={0 /* in milliseconds

*/
