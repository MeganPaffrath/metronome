//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import Sound from "react-sound";
import UIfx from 'uifx';

// Comonents
import Halves from "./Halves";
import PlayMetronome from "./PlayMetronome";

// Ticks
import tick1 from "./src/audio/tick1.wav";
import tick from "./src/audio/tick2.wav";

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


  playMetronome(props) {
    console.log("Playing metronome at " + props.bpm);
    let current = props.bpm;
    let timebetween = 300;

    // Initialize count
    let beat = 1;

    // while(current == props.bpm) {
    //   console.log("playing" + current);
    // }

    // let beats = setInterval(function() {
    //   if (beat%4 == 1) {
    //     console.log(props.bpm);
    //   } else {
    //     console.log(".");
    //   }
    //   beat++;
    // }, timebetween);

  }

  clickHandler(choice) {
    console.log(`You Clicked ${choice}`);
    this.setState({bpm: choice});
  }

  render() {
    const title = <Title />;
    const beeps = <PlayMetronome bpm={this.state.bpm}/>;

    this.playMetronome(this.state);



    // {originalHalves} where <halves is
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
