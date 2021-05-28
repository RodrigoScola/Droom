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
import "./css/main.scss";
import { Container } from "react-bootstrap";
import firebase from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import ButtonPost from "./posting/buttonPost";

export var musicAudio = [s1, s2, s3, s4, s5, s6];

const audioClips = [
  { sound: s1, label: "s1", style: "btn-light paddle mr-2 mb-2" },
  { sound: s2, label: "s2", style: "btn-warning paddle mr-2 mb-2" },
  { sound: s3, label: "s3", style: "btn-success paddle mr-2 mb-2" },
  { sound: s4, lebel: "s4", style: "btn-secondary paddle mr-2 mb-2" },
  { sound: s5, label: "s5", style: "btn-info paddle mr-2 mb-2" },
  { sound: s6, label: "s6", style: "btn-primary paddle mr-2 mb-2" },
];
export var music = [];
var newArr = [];
var timing = 0;
var baseInterval = 0;
var prevTime = 0;
var deltaTime = 0;
export var timingArr = [];
var recording = false;

export class Sounds extends Component {
  state = {
    ms: 0,
    duration: 0,
  };

  startRecord = () => {
    timingArr = [];
    music = [];
    timing = 0;
    if (recording) {
      clearInterval(this.timerInterval);
    }

    this.setState({ ms: 1 });
    recording = true;
    this.timerInterval = setInterval(() => {
      const { ms } = this.state;

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
    } else {
      clearTimeout(this.musicFuncTimeout);
    }
  };
  soundPlay = (src, index) => {
    const sound = new Howl({ src });
    sound.play();
    if (this.state.ms > 0) {
      deltaTime = this.state.ms - prevTime;
      if (deltaTime < 0) deltaTime = -deltaTime;
      music.push([src, " "]);
      timingArr.push([deltaTime]);
      prevTime = this.state.ms;
    }
  };
  playmusic = () => {
    this.musicFuncTimeout = setTimeout(this.musicFunc, timingArr[timing] * 10);
  };
  stopmusic = () => {};

  renderButtons = () => {
    return audioClips.map((v, i) => {
      return (
        <button
          className={v.style}
          key={i}
          onClick={() => this.soundPlay(v.sound, i)}
        ></button>
      );
    });
  };

  render() {
    Howler.volume(1.0);
    return (
      <div className="">
        {this.renderButtons()}
        <Container>
          <div class="text-center mt-5">
            <button
              className="btn   btn-info m-1"
              onClick={() => {
                this.startRecord();
              }}
            >
              <i class="bi bi-record"></i>
              start recording
            </button>
            <button
              className="btn btn-success m-1"
              onClick={() => {
                this.stopRecord();
              }}
            >
              <i class="bi bi-record-fill"></i>
              stop recording
            </button>
            <button className="btn m-1 btn-primary" onClick={this.playmusic}>
              <i class="bi bi-play"></i>
              playmusic
            </button>
            <button className="btn btn-secondary m-1 " onClick={this.stopmusic}>
              <i class="bi bi-stop-fill"></i> stop music
            </button>
          </div>
        </Container>
        <form>
          <ButtonPost />
        </form>
      </div>
    );
  }
}

export default function PadSoundTest() {
  return <div>h3llpo</div>;
}
