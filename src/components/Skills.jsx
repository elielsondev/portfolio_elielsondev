import React from "react";

function Skills({ dataSelect }) {
  return (
    <section id="skillsSection">
      <article id="skillsArticle">
        <h2 id="skillsTitle">{dataSelect.skillsTitle}</h2>
        <hr />
        <p className="skillsParagraph">Soft-Skills</p>
        <div id="softSkills">
          {dataSelect.softSkills.map((skill, i) => {
            return (
              <span className="skillsCardSoft" key={i}>
                {skill}
              </span>
            );
          })}
        </div>

        <p className="skillsParagraph">Hard-Skills</p>
        <div id="hardSkills">
          {dataSelect.hardSkills.map(({ id, skill, image }) => {
            return (
              <span className="skillsCardHardSpan" key={id}>
                <img className="skillsCardHard" src={image} alt={skill} />
                <p className="skillName">{skill}</p>
              </span>
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default Skills;
