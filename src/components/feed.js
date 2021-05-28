import firebase from "../firebase";
import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { musicAudio } from "./PadSoundTest";
import { Howl } from "howler";
import "./css/main.scss";

var musicArr = [];
var timingArr = [];
var timing = 0;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const createMusic = () => {
  for (let i = 0; i <= random(5, 55); i++) {
    musicArr.push(musicAudio[random(0, musicAudio.length)]);
    timingArr.push(random(6, 16));
  }
};
const musicfunc = () => {
  if (timing <= musicArr.length - 1) {
    const sound = new Howl({ src: musicArr[timing] });
    sound.play();
    var timeout = setTimeout(musicfunc, timingArr[timing] * 36);
    timing++;
  } else {
    clearTimeout(timeout);
  }
};

const playmusic = () => {
  createMusic();
  var timeout = setTimeout(musicfunc, timingArr[timing] * 10);
};

const Feed = () => {
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
    <div className="background ">
      {posts.map((post) => (
        //post.song.split('')
        <div>
          <Container className="p-1">
            <Card>
              <div mr-5>
                <p className="pt-5 pl-3">essa música foi feita por {post.user}</p>
              </div>
              <div className="pl-3 d-flex">
                <img className=" img-thumbnail" src={post.photoUrl} />
                <h1 className='pt-2 pl-3'>{post.string}</h1>
              </div>
              <div className="p-4">
                <button
                  onClick={playmusic}
                  className="btn btn-block  btn-success"
                >
                  play music
                </button>
              </div>
            </Card>
          </Container>
        </div>
      ))}
    </div>
  );
};
export default Feed;
