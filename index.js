//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import Sound from "react-sound";
import UIfx from 'uifx';

// Ticks
import tick1 from "./src/audio/tick1.wav";
import tick from "./src/audio/tick2.wav";

let vol = 0.6;
console.log(typeof volume);

const tickFirst = new UIfx(
  tick1,
  {
    volume: 1.0,
    throttleMs: 100
  }
)



function Title(props) {
  return (
    <div className="title">
      <h1>Metronome</h1>
      <h2>meganpaffrath.com</h2>
    </div>
  )
}

function Halves(props) {
  console.log(props.bpm);
  return [
    <div key="d1" className="box-left">
      <div className="box-content">
        <GenerateButtonsByFive bpm={props.bpm} beatOne={props.firstBeat}/>
      </div>
    </div>,
    <div key="d2" className="box-right">
      <div className="box-content">
        <GenerateButtonsByOne bpm={props.bpm} beatOne={props.firstBeat}/>
      </div>
    </div>
  ]
}

function GenerateButtonsByFive(props) {
  console.log(props.bpm);
  console.log("gernerate " + props.bpm);
  let start=props.bpm;
  let buttons = [];
  for (let i= (start-15); i <= (start+15); i +=5) {
    buttons.push(
      <div key={"b" + i}>
       <button type="button" onClick={tickFirst.play()} className="btn btn-style">{i} BPM</button>
      </div>
    );
  }
  return (
    <div>{buttons}</div>
  )
}

// onClick={this.metronome.bind(props.bpm)}
function GenerateButtonsByOne(props) {
  let bpmVal = props.bpm;
  let sound = props.firstBeat;
  // sound.play();
  console.log("bpmVal: " + bpmVal);
  console.log("gernerate " + props.bpm);
  let start=props.bpm;
  let buttons = [];
  for (let i= (start-3); i <= (start+3); i +=1) {
    buttons.push(
      <div key={"b" + i}>
       <button type="button" onClick={tickFirst.play()} onClick={metronome.bind(props)} className="btn btn-style">{i} BPM</button>
      </div>
    );
  }
  return (
    <div>{buttons}</div>
  )
}

function metronome(props) {
  let currBPM = props.bpm;

  console.log("hi1");

  console.log(tick1);
  var tickOne = new Audio({tick1});
  var tickNorm = new Audio({tick});
  console.log("click");

  let timebetween = 60 / currBPM * 1000;

  console.log("currBPM: " + this);
  console.log(timebetween);
  console.log("b");

  let beat = 1;

  // <Sound {tickOne}/>;

  // tickOne.play(tickOne);

  // let beats = setInterval(function() {
  //   if (beat%4 == 1) {
  //     tick1.play(tick1);
  //   } else {
  //     tick.play(tick);
  //   }
  //   beat++;
  // }, timebetween);
}

class App extends React.Component {
  constructor(props) {
        super(props); // Must call
        this.state = {
          bpm: 100,
          firstBeat: new UIfx(
            tick1,
            {
              volume: 1.0,
              throttleMs: 100
            }
          )
          // tick1: <Sound url={tick1}
          //   playStatus={Sound.status.PLAYING}
          //   playFromPosition={0 /* in milliseconds */}/>
        };
    }

  render() {


    const title = <Title />;
    let halves = <Halves bpm={this.state.bpm} beatOne = {this.state.firstBeat} />

    return (
      <main className="no-extras">
        {title}
        {halves}
      </main>
    );
  }
}

ReactDOM.render(<App/>,
  document.getElementById("root")
);
