import React, { useState } from "react";
import './App.css';

import Header from "./components/Header";
import Menu from "./components/Menu.jsx";
import SocialMedia from "./components/SocialMedia";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

import data from "./data/data.js";
import Footer from "./components/Footer.jsx";

function App() {
  const [language, setLanguage] = useState(0);
  const [menuStatus, setMenuStatus] = useState('hideMenu');

  const dataSelect = data[language];

  return (
    <>
      <Header setLanguage={ setLanguage } menuStatus={ setMenuStatus } />
      <Menu dataSelect={ dataSelect } showMenu={ menuStatus } />
      <SocialMedia />
      <Home dataSelect={ dataSelect } />
      <About dataSelect={ dataSelect } />
      <Skills dataSelect={ dataSelect } />
      <Projects dataSelect={ dataSelect } />
      <Footer dataSelect={ dataSelect } />
    </>
  );
}

export default App;