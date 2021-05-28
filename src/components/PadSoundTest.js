import React from "react";
import { Component } from "react";
import s1 from "./sounds/s1.mp3";
import s2 from "./sounds/s2.mp3";
import s3 from "./sounds/s3.mp3";
import s4 from "./sounds/s4.mp3";
import s5 from "./sounds/s5.mp3";
import s6 from "./sounds/s6.mp3";
import s7 from "./sounds/s7.mp3";
import { Howl, Howler } from "howler";
import "./css/main.css";

var ms = 0;
var music = [];


const audioClips = [
  { sound: s1, label: "s1", color: "btn-danger" },
  { sound: s2, label: "s2", color: "btn-warning" },
  { sound: s3, label: "s3", color: "btn-primary" },
  { sound: s4, label: "s4", color: "btn-primary" },
  { sound: s5, label: "s5", color: "btn-primary" },
  { sound: s6, label: "s6", color: "btn-primary" },
];
<<<<<<< HEAD
export const Sounds = () => {
  soundPlay = (src) => {
    this.timerInterval = setInterval (() =>{
      if (ms > 0) {
        this.setState(({ ms }) => ({
          ms: ms + 1,
        }));
      }
    }, 50);
  };
  stopRecord = () => {
    clearInterval(this.timerInterval);
    music = [];
    recording = false;
    this.setState({ recording: false, ms: 0, duration: this.state.ms });
  };
  musicFunc = () => {
    if (timing <= music.length - 1) {
      const sound = new Howl({ src: [music[timing][0]] });
      sound.play();
      let intervalo = baseInterval + 200;
      this.musicFuncTimeout = setTimeout(
        this.musicFunc,
        timingArr[timing] * 36
      );
      timing++;
    } else if (timing == music.length) {
      timing = 0;
    } else if (timing > music.length) {
      clearTimeout(this.musicFuncTimeout);
    }
  };
=======

export class Sounds extends Component {
  constructor(props) {
    super(props);
  }

  soundPlay = (src) => {
    const sound = new Howl({ src });
    sound.play();
  };

  render() {
>>>>>>> parent of 809ee18 (nre)
    Howler.volume(1.0);
    return (
      <div>
        <button
          className="btn-danger paddle mr-2 mb-2"
          key={"0"}
          onClick={() => {
            this.soundPlay(audioClips[0].sound);
          }}
        ></button>
        <button
          className="btn-warning paddle mr-2 mb-2"
          key={"1"}
          onClick={() => {
            this.soundPlay(audioClips[1].sound);
          }}
        ></button>
        <button
          className="btn-info paddle mr-2 mb-2"
          key={"2"}
          onClick={() => {
            this.soundPlay(audioClips[2].sound);
          }}
        ></button>
        <button
          className="btn-primary paddle mr-2 mb-2"
          key={"3"}
          onClick={() => {
            this.soundPlay(audioClips[3].sound);
          }}
        ></button>
        <button
          className="btn-secondary paddle mr-2 mb-2"
          key={"4"}
          onClick={() => {
            this.soundPlay(audioClips[4].sound);
          }}
        ></button>
        <button
          className="btn-dark paddle mr-2 mb-2"
          key={"5"}
          onClick={() => {
            this.soundPlay(audioClips[5].sound);
          }}
        ></button>
      </div>
    );
  }

export default function PadSoundTest() {
  return (
    <div>
      <Sounds />
    </div>
  );
}
