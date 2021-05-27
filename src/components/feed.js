import firebase from "../firebase";
import React, { useState, useEffect } from "react";
import { Replay } from "./test";

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
  const splitted = posts.map((post) => {
    post.song.split("");
  });
  return (
    <div className="ml-5">
      {posts.map((post) => (
        //post.song.split('')
        <div>
          <Replay user={post.user} title={post.string} />
          {splitted}
        </div>
      ))}
    </div>
  );
};
export default Feed;
