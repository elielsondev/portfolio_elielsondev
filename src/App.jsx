import React from "react";
import './App.css';

import Header from "./components/Header";
import SocialMedia from "./components/SocialMedia";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <SocialMedia />
      <Home />
      <About />
    </>
  );
}

export default App;
