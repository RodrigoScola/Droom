import React, { useRef, useState, useEffect, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./css/main.css";
import firebase, { app } from "firebase";
import { auth } from "../firebase"

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  //google authentication

  const provider = new firebase.auth.GoogleAuthProvider();

  const AuthWithGoogle = () => {
    try {
      setError('')
      setLoading(true);
      firebase.auth().signInWithPopup(provider)
      history.push('/')
    } catch {
      setError('could not complete google authentication')
    }
  }

  const [currentUser,setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user)=> {
      setCurrentUser(user)
    })
  
  }, [])

  //email and password autentication


  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
            <Button disabled={loading} onClick={AuthWithGoogle} className="btn btn-block btn-dark mt-1" type="sumbit">
              <i className="bi bi-google"></i>
            </Button>
            {currentUser && <p>{currentUser.displayName}</p>} 
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
