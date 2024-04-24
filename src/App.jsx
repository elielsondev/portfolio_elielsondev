import React, { useState } from "react";
import './App.css';

import Header from "./components/Header";
import SocialMedia from "./components/SocialMedia";
import Home from "./components/Home";
import About from "./components/About";

import data from "./data/data.js";
import Skills from "./components/Skills.jsx";

function App() {
  const [language, setLanguage] = useState(0);

  const dataSelect = data[language];

  return (
    <>
      <Header setLanguage={ setLanguage } />
      <SocialMedia />
      <Home dataSelect={ dataSelect } />
      <About dataSelect={ dataSelect } />
      <Skills dataSelect={ dataSelect } />
    </>
  );
}

export default App;
