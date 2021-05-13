import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {AuthWithGoogle} from './Signup'
import firebase from 'firebase';
import { auth } from "../firebase"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

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



  async function handleSubmit(e) {

    try {
      setError("")
      setLoading(true)
      history.push("/")
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
        
            <Button disabled={loading} onClick={AuthWithGoogle} className="btn btn-block btn-dark mt-1" type="sumbit">
              <i className="bi bi-google"></i>
            </Button>
        
        </Card.Body>
      </Card>
     
    </>
  )
}
