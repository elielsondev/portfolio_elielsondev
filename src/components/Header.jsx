import React, { useEffect, useState } from "react";
import brasil from "../utils/Flag_of_Brazil.png";
import unitedKingdon from "../utils/Flag_of_the_United_Kingdom.png";

// Documentação do pacote: https://hamburger-react.netlify.app/
import { Divide as Hamburger } from "hamburger-react";
// import Menu from "./Menu";

function Header({ setLanguage, menuStatus }) {
  return (
    <header id="header">
      <div id="divLanguage">
        <div>
          <img
            id="portuguese"
            src={brasil}
            alt="Portuguese [Bandeira do Brasil]"
            title="PT-BR"
            onClick={ () => setLanguage(0)}
          />

          <img
            id="english"
            src={unitedKingdon}
            alt="English [Flag of the United Kingdon]"
            title="EN"
            onClick={ () => setLanguage(1)}
          />
        </div>

        <div id="sandwichMenu">
          <Hamburger
            onToggle={(toggled) => {
              if (toggled) {
                menuStatus('displayMenu');
              } else {
                menuStatus('hideMenu');
              }
            }}
            onClick={menuStatus}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
