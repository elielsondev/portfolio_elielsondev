import React from "react";

function About({ dataSelect }) {
  return (
    <section id="aboutSection">
      <article id="aboutArticle">
        <h2 id="aboutTitle">{ dataSelect.aboutTitle }</h2>
        <hr />
        <p id="aboutParagraph">{ dataSelect.aboutText }</p>
      </article>
    </section>
  );
}

export default About;
