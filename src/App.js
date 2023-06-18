import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./components/Auth/AuthForm";
import ComposeEmail from "./components/mailbox/composeEmail";
import Welcome from "./components/pages/Welcome";
import MailDeets from "./components/mailbox/mailDeets";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <AuthForm />
      <Routes>
      <Route exact path="/"/>
      <Route exact path="/welcome" element={<Welcome/>}/>
      <Route path='/compose' element={<ComposeEmail/>}/>
      <Route exact path="/mail/:mailId" element={<MailDeets/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}