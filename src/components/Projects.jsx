import React from 'react';

function Projects({ dataSelect }) {
  return (
    <section id='projectsSection'>
      <article id='projectsArticle'>
        <h1 id='projectsTitle'>{ dataSelect.projectsTitle }</h1>
        <hr />
        {/* Project Card */}
        <div id="projects">
          { dataSelect.projects.map((project) => (
            <div key={ project.id } className='projectCard'>
              <h2 className='projectName'>{ project.title }</h2>
              <img src={ project.image } alt={ project.title } width={250} />
              <p className='projectParagraph'>{ project.description }</p>
              <a href={ project.site } target='_blank' rel='noreferrer'>
                <div className='projectButton'>Site</div>
              </a>
              <a href={ project.repository } target='_blank' rel='noreferrer'>
                <div className='projectButton'>{ project.title === "Projetos" ? "Repositório" : "Repository" }</div>
              </a>
            </div>
          )) }
        </div>
      </article>
    </section>
  )
}

export default Projects;
