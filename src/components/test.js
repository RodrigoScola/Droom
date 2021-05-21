import M from "minimatch";
import React, { useState, useEffect } from "react";
import { Component } from "react";
import firebase from "../firebase";

const db = firebase.firestore();

let Data = {
  name: "name",
  dateTime: "",
  imgUrl: "",
  postId: 0,
  title: "",
  user: "uuid",
  username: "username",
};
//post data

class Posting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hasodf",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    db.collection("helljoier").add({ name: "hojd" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="heres your text" />
          <button type="submit"> submit</button>
        </form>
      </div>
    );
  }
}

//display data

const App = () => {
  const [songs, setSongs] = useState([]);
  const fetchBlogs = async () => {
    const response = db.collection("helljoier");
    const data = await response.get();
    data.docs.forEach((item) => {
      setSongs([...songs, item.data()]);
    });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      {songs &&
        songs.map((v) => {
          return (
            <div>
              <h4>{v.name}</h4>
            </div>
          );
        })}
    </div>
  );
};

function Test() {
  return (
    <div>
      <Posting />
      <App />
    </div>
  );
}

export default Test;
