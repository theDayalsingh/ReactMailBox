import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./components/Auth/AuthForm";
import Logout from "./components/Auth/Logout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <AuthForm />
      <Routes>
      <Route exact path="/"/>
      <Route exact path="/welcome" element={<Logout />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}