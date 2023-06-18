import React from 'react'
import  Button  from "react-bootstrap/Button";
import Logout from '../Auth/Logout';

const Welcome = () => {
  return (
    <div><h1>Welcome to Your Mailbox</h1>
    <Logout/>
    <a href='/compose'> <Button>Compose email</Button></a></div>
  )
}

export default Welcome