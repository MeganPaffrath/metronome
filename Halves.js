//jshint esversion: 6
import React from "react";
import ReactDOM from "react-dom";

class Halves extends React.Component {
  constructor(props) {
    super(props); // Must call
    this.state = {
      item: "value"
    };
  }


  render() {
    console.log("BPM is: " + this.props.bpm);
    return [
      <div key="d1" className="box-left">Hello</div>,
      <div key="d2" className="box-right">Hello</div>
    ];

  }

}

export default Halves;
