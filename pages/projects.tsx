import React from 'react'
import ProjectCard from "../components/ProjectCard"
import {rdLand, TheCacophone, bibli, easyAtRents} from "../utilities/projects"
import style from "../styles/scss/projects.module.scss"
import PageAnimation from "../components/PageAnimation"

const projects = [rdLand, TheCacophone, bibli, easyAtRents]
const Projects = () => {
  return (
    <PageAnimation>
    <main>
      <div className={`container-custom container--vertical--spacing`}>
        <h3 className={`header-1`}>My Projects</h3>
        <div className={`${style.projects}`}>
          {projects.map((project, i)=><ProjectCard key={i} project={project} />)}
          <a rel="noreferrer" href="https://github.com/fiyintheslim?tab=repositories" target="_blank" className={`btn `}>View More Projects</a>
        </div>
        
      </div>
    </main>
    </PageAnimation>
  )
}

export default Projects