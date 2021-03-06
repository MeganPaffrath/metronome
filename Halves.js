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

  bpmHandler(newBPM) {
    console.log("rec: " + newBPM);
    console.log(newBPM);
    this.props.bpmBind(newBPM);
  }


  render() {
    let that = this;
    console.log("BPM is: " + this.props.bpm);

    // Generate buttons by one
    let startByOne = this.props.bpm;
    let buttonsByOne = [];
    for (let i= (startByOne-3); i <= (startByOne+3); i +=1) {
      buttonsByOne.push(
        <div key={"b" + i}>
          <button type="button" onClick={that.bpmHandler.bind(that, i)} className="btn btn-style">{i} BPM</button>
        </div>
      );
    }

    // generate buttons by 5
    let startByFive = this.props.bpm;
    let buttonsByFive = [];
    for (let i= (startByFive-15); i <= (startByFive+15); i +=5) {
      buttonsByFive.push(
        <div key={"b" + i}>
         <button type="button" onClick={that.bpmHandler.bind(that, i)} className="btn btn-style">{i} BPM</button>
        </div>
      );
    }

    return [
      <div key="d1" className="box-left">
        <div className="box-content">
          {buttonsByFive}
        </div>
      </div>,
      <div key="d2" className="box-right">
        <div className="box-content">
          {buttonsByOne}
        </div>
      </div>
    ];

  }

}

export default Halves;
