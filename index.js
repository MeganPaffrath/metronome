//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";

// Comonents
import Halves from "./Halves";
import PlayMetronome from "./PlayMetronome";


function Title(props) {
  return (
    <div className="title">
      <h1>Metronome</h1>
      <h2>meganpaffrath.com</h2>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
      super(props); // Must call
      this.state = {
        bpm: 100
      };
  }

  clickHandler(choice) {
    console.log(`You Clicked ${choice}`);
    this.setState({bpm: choice});
  }

  render() {
    const title = <Title />;
    const beeps = <PlayMetronome bpm={this.state.bpm}/>;

    return (
      <main className="no-extras">
        {title}
        <Halves bpm={this.state.bpm}
        bpmBind={this.clickHandler.bind(this)}/>
        {beeps}
      </main>
    );
  }
}

ReactDOM.render(<App/>,
  document.getElementById("root")
);
