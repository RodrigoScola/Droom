import React, { Component } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Howler, Howl } from "howler";
import s1 from "./sounds/s1.mp3";


const playmusic = () => {
  const sound = new Howl ({ src: [s1]})
  sound.play()
} 

export const Replay = (props) => {
  const musicArr = props.song
  
  return (
    <div>
      <br />
      <h4>{props.title}</h4>
      <p>{`This music was made by ${props.user.split('')}`}</p>
      <button onClick={playmusic}>
        <i class="bi bi-play"></i>
        play music
      </button >
      <br />
      <p>{musicArr}</p>
    </div>
  );
};

const Test = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div>
      <Replay name={currentUser.displayName} />
    </div>
  );
};
export default Test;

// <button className="btn m-1 btn-primary" onClick={this.playmusic}>
// <i class="bi bi-play"></i>
// playmusic
// </button>

// playmusic = () => {
//   this.musicFuncTimeout = setTimeout(this.musicFunc, timingArr[timing] * 10);
// };

// musicFunc = () => {
//   if (timing <= music.length - 1) {
//     const sound = new Howl({ src: [music[timing][0]] });
//     sound.play();
//     let intervalo = baseInterval + 200;
//     this.musicFuncTimeout = setTimeout(
//       this.musicFunc,
//       timingArr[timing] * 36
//     );
//     timing++;
//   } else {
//     clearTimeout(this.musicFuncTimeout);
//   }
// };

// function something = () => {
//   const { currentUser, logout } = useAuth();
// something.map(() => {
//   <Test name={currentUser.displayName} />
// })
// }

// https://pt-br.reactjs.org/docs/components-and-props.html
