import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "./css/main.css";
import { auth } from "../firebase";
import ButtonPost from "./posting/buttonPost";
import { Component } from "react";

import paddle from "./posting/paddle";
import {Sounds} from "./PadSoundTest";
import {Auth} from '../firebase'

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
<<<<<<< Updated upstream
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
=======
    <div className="welcome-section text-center ">
      <Container className='droomLogo'>
        <nav className="">
          <p className="pb-3">
            {currentUser && (
              <div className="">
                <Link className="text-dark " to="/dashboard">
                  <img className="pr-3" id='profileimg' src={currentUser.photoURL} />

                  <button className="btn  btn-primary">
                    {currentUser.displayName}
                  </button>
                  
                </Link>
                <button onClick={handleFeed} className='btn ml-2 btn-secondary'>Feed</button>
                <button onClick={handleLogout} className='btn ml-2 btn-info'>Logout</button>

              </div>
            )}
          </p>
        </nav>
        <div classname="">
          <Sounds />
          <div></div>
>>>>>>> Stashed changes
        </div>
      </div>
      <div><button onClick={auth.signOut()}>logout </button><button onClick={auth.signInWithPopup()}></button></div>
    </div>
  );
}
