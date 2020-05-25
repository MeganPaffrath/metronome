//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";


function Title(props) {
  return (
    <div>Title</div>
  )
}

function Halves(props) {
  return (
    <div>Curr: {props.bpm}</div>
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
      <div>
        {title}
        {halves}
      </div>
    );
  }
}

ReactDOM.render(<App/>,
  document.getElementById("root")
);
