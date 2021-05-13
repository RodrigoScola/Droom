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

const audioClips = [
  { sound: s1, label: "s1", color: "btn-danger paddle mr-2 mb-2" },
  { sound: s2, label: "s2", color: "btn-warning paddle mr-2 mb-2" },
  { sound: s3, label: "s3", color: "btn-success paddle mr-2 mb-2" },
  { sound: s4, label: "s4", color: "btn-secondary paddle mr-2 mb-2" },
  { sound: s5, label: "s5", color: "btn-info paddle mr-2 mb-2" },
  { sound: s6, label: "s6", color: "btn-primary paddle mr-2 mb-2" },
];
var music = [];

export class Sounds extends Component {
  state = {
    ms: 1,
    song: [],
    duration: 0,
  };

  startRecord = () => {
    this.setState({ ms: 1 });
    this.myInterval = setInterval(() => {
      const { ms } = this.state;

      if (ms > 0) {
        this.setState(({ ms }) => ({
          ms: ms + 1,
        }));
      }
    }, 10);
  };
  stopRecord = () => {
    clearInterval(this.myInterval);
    music = [];
    this.setState({ song: [], ms: 0, duration: this.state.ms });
  };

  soundPlay = (src, index) => {
    const sound = new Howl({ src });
    sound.play();
    if (this.state.ms > 0) {
      music.push([audioClips[index].sound, " ", this.state.ms]);
    }
  };
  playMusic = (src) => {music.map((v,i)=>{
   
  })};

  renderButtons = () => {
    return audioClips.map((v, i) => {
      return (
        <button
          className={v.color}
          key={i}
          onClick={() => this.soundPlay(v.sound, i)}
        ></button>
      );
    });
  };
  render() {
    Howler.volume(1.0);
    return (
      <div>
        {this.renderButtons()}
        
        <p>{this.state.ms}</p>
        <button
          onClick={() => {
            this.startRecord();
          }}
        >
          start recording
        </button>
        <button
          onClick={() => {
            this.stopRecord();
          }}
        >
          stop recording
        </button>
        <button onClick={this.playMusic(music)}>playmusic</button>
        <p>{this.state.duration}</p>
        <p>
          {music.map((v, i) => {
            return <p>{v}</p>;
          })}
        </p>
      </div>
    );
  }
}
