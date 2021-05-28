import React, { useState, useEffect } from "react";
import "./css/main.scss";
import { auth } from "../firebase";
import { Component } from "react";
import { Sounds } from "./PadSoundTest";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";


export default function Main() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
async function handleFeed(){
  history.push("/feed")
}
  return (
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
          <div>
            
          </div>

        </div>
      </Container>
    </div>
  );
}
