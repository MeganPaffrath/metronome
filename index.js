//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";


function Title(props) {
  return (
    <div class="title">
      <h1>Metronome</h1>
    </div>
  )
}

function Halves(props) {
  return [
    <div class="box-left">
      <div class="box-content">
        <div>Curr: {props.bpm}</div>
      </div>
    </div>,
    <div class="box-right">
      <div class="box-content">
        right
      </div>
    </div>
  ]
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
      <main>
        {title}
        {halves}
      </main>
    );
  }
}

ReactDOM.render(<App/>,
  document.getElementById("root")
);
