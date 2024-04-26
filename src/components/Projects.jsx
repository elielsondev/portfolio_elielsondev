import React from 'react';

function Projects({ dataSelect }) {
  return (
    <section id='projectsSection'>
      <article id='projectsArticle'>
        <h1 id='projectsTitle'>{ dataSelect.projectsTitle }</h1>
        <hr />
      </article>
    </section>
  )
}

export default Projects;
