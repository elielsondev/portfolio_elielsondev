import React from "react";
import meuAvatar from "../utils/meuAvatar.png";
import brasil from "../utils/Flag_of_Brazil.png";
import unitedKingdon from "../utils/Flag_of_the_United_Kingdom.png";

// Documentação do pacote: https://hamburger-react.netlify.app/
import { Divide as Hamburger } from "hamburger-react";

function Header({ setLanguage }) {
  return (
    <header id="header">
      <div id="logoAndTitle">
        <img id="logo" src={meuAvatar} alt="Meu Avatar" />
        <h1 id="titleHeader">Elielson Nascimento</h1>
      </div>

      <div id="divLanguage">
        <div>
          <img
            id="portuguese"
            src={brasil}
            alt="Portuguese [Bandeira do Brasil]"
            onClick={ () => setLanguage(0)}
          />

          <img
            id="english"
            src={unitedKingdon}
            alt="English [Flag of the United Kingdon]"
            onClick={ () => setLanguage(1)}
          />

        </div>

        <div id="sandwichMenu">
          <Hamburger
            onToggle={(toggled) => {
              if (toggled) {
                alert("open"); // open a menu
              } else {
                alert("closed"); // close a menu
              }
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
