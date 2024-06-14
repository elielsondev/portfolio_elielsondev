import React from "react";

function Menu({ dataSelect, showMenu }) {
  return (
    <nav id={showMenu}>
      <a className="menuItem" href="#home">
        {dataSelect.homeTitle}
      </a>
      <a className="menuItem" href="#aboutTitle">
        {dataSelect.aboutTitle}
      </a>
      <a className="menuItem" href="#skillsTitle">
        {dataSelect.skillsTitle}
      </a>
      <a className="menuItem" href="#projectsTitle">
        {dataSelect.projectsTitle}
      </a>
    </nav>
  );
}

export default Menu;