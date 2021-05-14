import React, { Component } from "react";
import s1 from "./sounds/s1.mp3";
import s2 from "./sounds/s2.mp3";
import s3 from "./sounds/s3.mp3";
import s4 from "./sounds/s4.mp3";
import s5 from "./sounds/s5.mp3";
import s6 from "./sounds/s6.mp3";
import { Howl, Howler } from "howler";

const audioClips = [
  { sound: s1, label: "s1", style: "btn-danger paddle mr-2 mb-2" },
  { sound: s2, label: "s2", style: "btn-warning paddle mr-2 mb-2" },
  { sound: s3, label: "s3", style: "btn-success paddle mr-2 mb-2" },
  { sound: s4, lebel: "s4", style: "btn-secondary paddle mr-2 mb-2" },
  { sound: s5, label: "s5", style: "btn-info paddle mr-2 mb-2" },
  { sound: s6, label: "s6", style: "btn-primary paddle mr-2 mb-2" },
];

var i = 100;
var timing = 0;
export default class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  megas = () => {
      if (timing  < audioClips.length ) {

          const sound = new Howl({ src: [audioClips[timing].sound] });
          sound.play();
          i = i + 200;
          timing++
          this.myTimeout = setTimeout(this.megas, i);
        } else {
            clearTimeout(this.myTimeout)
        }

    
    
};
  clickme = () => {
    this.myTimeout = setTimeout(this.megas, i);
  };
  stopStuff = () => {
    clearTimeout(this.myTimeout);
  };
  clear = () => {
    clearTimeout(this.myTimeout);
    this.setState({
      array: [],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.clickme}>clickme</button>
        <button onClick={this.stopStuff}>stop stuff</button>
        <button onClick={this.clear}>clear</button>
        <p>{this.state.array}</p>
      </div>
    );
  }
}
