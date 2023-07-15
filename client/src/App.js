import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Abouttt from "./components/Abouttt";
import Errorpage from "./components/Errorpage";
import "./App.css";

const App = () => {
  return (
    /*<div>
      <h1>Hello world from anurag</h1>
    </div>del*/

    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/abouttt" element={<Abouttt />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
