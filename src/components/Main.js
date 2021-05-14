import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "./css/main.css";
import { auth } from "../firebase";
import ButtonPost from "./posting/buttonPost";
import { Component } from "react";
import paddle from "./posting/paddle";
import { Sounds } from "./PadSoundTest";
import { Link } from "react-router-dom";

class Paddle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="paddle mr-2 mb-2">hello there</button>
      </div>
    );
  }
}

export default function Main() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div>
      <nav className="bg-info">
        <p className="justify-content-center">
          {currentUser && (
            <div className="d-flex">
              <Link className="" to="/dashboard">
                <img src={currentUser.photoURL} />
              </Link>

              <Link className="text-dark mt-4 ml-2" to="/dashboard">
                {currentUser.displayName}
              </Link>
            </div>
          )}
        </p>
      </nav>
      <div classname="align-content-center">
        <Sounds />
        <div>
          <ButtonPost />
        </div>
      </div>
    </div>
  );
}
