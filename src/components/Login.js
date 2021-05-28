import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../firebase";
import "./css/login.scss";
import logo from "./images/DroomLogo.png";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, logout } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const provider = new firebase.auth.GoogleAuthProvider();

  const AuthWithGoogle = () => {
    try {
      
      firebase.auth().signInWithPopup(provider);
      setError("");
      setLoading(true);
      setTimeout(() => {
        
        history.push("/");
      }, 5000);
    } catch {
      setError("could not complete google authentication");
    }
  };
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  async function handleSubmit(e) {
    try {
      setError("");
      setLoading(true);
      history.push("/");
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div class=" welcome-section ">
      <div className="">
        <img src={logo} alt="droom logo" class="droomLogo center" />
        <h5 className="pb-2 text-center"> Entre com a sua conta</h5>
        <button
          disabled={loading}
          onClick={AuthWithGoogle}
          id="loginButton"
          className="btn  mt-1"
          type="sumbit"
        >
          <i className="bi bi-google"></i>
        </button>
      </div>
    </div>
  );
}
