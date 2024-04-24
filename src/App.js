import React from "react";
import { Signup } from "./Auth/SignUp";
import { Signin } from "./Auth/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import ForgotPassword from "./Auth/ForgotPassword";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
