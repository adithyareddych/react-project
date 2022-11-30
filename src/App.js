import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Details from "./components/Details";
import Resume from "./components/Resume";
import Apply from "./components/Apply";
import Blogs from "./components/Blogs";
import Admin from "./components/Admin";
import Verify from "./components/Verify";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </>
  );
}

export default App;
