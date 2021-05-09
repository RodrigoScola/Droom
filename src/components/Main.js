import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "./css/main.css";
import { auth } from "../firebase";
import ButtonPost from "./posting/buttonPost";
import { Component } from "react";
import paddle from './posting/paddle'
import {Sounds} from './PadSoundTest'

class Paddle extends Component {
  constructor(props) {
      super(props);
  }

  
  render() {
    return <div>
        <button className='paddle mr-2 mb-2' >hello there</button>
    </div>;
  }
}




export default function Main() {
  let clicked = false;

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div>
      <nav className="bg-info">
        <p className="text-right">
          {currentUser && (
            <>
              <img src={currentUser.photoURL} />
              <p>{currentUser.displayName}</p>
            </>
          )}
        </p>
      </nav>

      <div classname="paddlebox">
        <Sounds />
        <div>
          <ButtonPost />
        </div>
      </div>
    </div>
  );
}
