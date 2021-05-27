import { ReactMediaRecorder } from "react-media-recorder";
import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Howler, Howl } from "howler";
import { audio } from "./PadSoundTest";
import "./css/feed.scss";

let musicArr = [];
let timingArr = [];
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let timing = 0;

const createSong = () => {
  for (let i = 0; i <= random(4, 15); i++) {
    musicArr.push(audio[random(0, audio.length + 4)]);
    timingArr.push(Math.floor(Math.random() * 25));
  }
};
const musicFunc = () => {
  if (timing <= musicArr.length - 1) {
    const audioMusic = new Howl({
      src: [audio[Math.floor(Math.random() * audio.length)]],
    });
    audioMusic.play();
    var musictimeout = setTimeout(musicFunc, timingArr[timing] * 36);
    timing++;
  } else {
    clearTimeout(musictimeout);
  }
};

const PlayMusic = () => {
  createSong();
  var musictimeout = setTimeout(musicFunc, 100);
};

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const postRef = db.collection("MyPosts");
      const data = await postRef.get();
      setPosts(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);
  return (
    <div className="welcome-section">
      {posts.map((post) => (
        //post.song.split('')
        <div class="p-3 ">
          <div className="pl-2  card ">
            <h1>{post.string}</h1>
            <p>this music was made by {post.user}</p>
            <div>
              <button
                padding="20%"
                onClick={PlayMusic}
                className="btn btn-success"
              >
                play random music
              </button>
            </div>
            <p>{musicArr[0]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
