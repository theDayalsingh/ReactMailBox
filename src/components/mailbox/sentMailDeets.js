import React from "react";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";

export default function SentMailDeets() {
  const location = useLocation();
  const navigate = useNavigate();
  const { to, subject, body } = location.state;

  console.log('mail sent to',to)

  return (
    <div>
      <Button onClick={() => navigate("/welcome")}>Back</Button>
      <p>To: {to}</p>
      <p>Subject: {subject}</p>
      <p>Body: {body}</p>
    </div>
  );
}