//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import Sound from "react-sound";
import tick1 from "./src/audio/tick1.wav";
import tick from "./src/audio/tick2.wav";



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
        <GenerateButtonsByFive bpm={props.bpm} />
      </div>
    </div>,
    <div key="d2" className="box-right">
      <div className="box-content">
        <GenerateButtonsByOne bpm={props.bpm} />
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
       <button type="button" className="btn btn-style">{i} BPM</button>
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
  console.log("bpmVal: " + bpmVal);
  console.log("gernerate " + props.bpm);
  let start=props.bpm;
  let buttons = [];
  for (let i= (start-3); i <= (start+3); i +=1) {
    buttons.push(
      <div key={"b" + i}>
       <button type="button" onClick={metronome.bind(bpmVal)} className="btn btn-style">{i} BPM</button>
      </div>
    );
  }
  return (
    <div>{buttons}</div>
  )
}

function metronome() {
  let currBPM = this;

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
          bpm: 100
          // tick1: <Sound url={tick1}
          //   playStatus={Sound.status.PLAYING}
          //   playFromPosition={0 /* in milliseconds */}/>
        };
    }

  render() {
    const title = <Title />;
    let halves = <Halves bpm={this.state.bpm} />
    
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
