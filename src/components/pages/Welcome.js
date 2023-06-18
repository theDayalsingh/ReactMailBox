import React from 'react'
import  Button  from "react-bootstrap/Button";
import Logout from '../Auth/Logout';
import Inbox from '../mailbox/inbox';

const Welcome = () => {
  return (
    <div><h1>Welcome to Your Mailbox</h1>
    <Logout/>
    <Inbox/>
    <a href='/compose'> <Button>Compose email</Button></a></div>
  )
}

export default Welcome