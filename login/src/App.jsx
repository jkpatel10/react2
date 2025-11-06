import React from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" Component={Signup}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/home" Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  );
}
