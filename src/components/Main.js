import { render } from "@testing-library/react"
import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import PostForm from './forms/postform'
import './css/main.css'

export default function Main() {
  let clicked = false;

  const { currentUser, logout } = useAuth()
 
  return (
    <div>
      <nav className="">
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </nav>
     
      
      <div classname='paddlebox'> 
      <button className='paddle mr-2 mb-2' >hello thre</button>
      <button className='paddle mr-2 mb-2' >hello thre</button>
      <button className='paddle mr-2 mb-2' >hello thre</button>
      <button className='paddle mr-2 mb-2' >hello thre</button>
      <button className='paddle mr-2 mb-2' >hello thre</button>
      <button className='paddle mr-2 mb-2' >hello thre</button>
      <div>
      <Button onClick={clicked = true} className='inputBox btn-warning btn-block mt-3'>Post Music</Button>
      </div>
      <div>{clicked == false ? null : <PostForm />}</div>
      </div>
    </div>
  )
}
