//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";


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
    console.log("I: " + i);
  }
  return (
    <div>{buttons}</div>
  )
}

function GenerateButtonsByOne(props) {
  console.log(props.bpm);
  console.log("gernerate " + props.bpm);
  let start=props.bpm;
  let buttons = [];
  for (let i= (start-3); i <= (start+3); i +=1) {
    buttons.push(
      <div key={"b" + i}>
       <button type="button" className="btn btn-style">{i} BPM</button>
      </div>
    );
    console.log("I: " + i);
  }
  return (
    <div>{buttons}</div>
  )
}

class App extends React.Component {
  constructor(props) {
        super(props); // Must call
        this.state = {bpm: 100};
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
