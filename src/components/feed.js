import firebase from "../firebase";
import React, { useState, useEffect } from "react";
import { Replay } from "./test";
import { Howler,Howl } from "howler";
import s1 from './sounds/s1.mp3'

const playSong = (arr) => {
  const sound = new Howl({src: [s1]})
  sound.play()
}

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const postRef = db.collection("MyPosts");
      const data = await postRef.get();
      setPosts(data.docs.map((doc) => doc.data()));
      const musicArr = data.song
    };
    fetchData();
  }, []);
  const db = firebase.firestore().collection('MyPosts').get().song
  
  const splitted = posts.map((post) => {
    post.song.split("");
});
  return (
    <div className="ml-5">
      {posts.map((post) => (
        //post.song.split('')
        <div>
          
          <Replay user={post.user} title={post.string} />
          <button onClick={playSong}>
            hello there
            </button>
          <p>{post.song.split(', ,')}</p>
          <p>{db}</p>
        </div>
      ))}
    </div>
  );
};
export default Feed;
