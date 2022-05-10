import React from 'react'
import ProjectCard from "../components/ProjectCard"
import {rdLand, TheCacophone} from "../utilities/projects"
import style from "../styles/scss/projects.module.scss"

const Projects = () => {
  return (
    <main>
      <div className={`container-custom container--vertical--spacing`}>
        <h3 className={`header-1`}>My Projects</h3>
        <div className={`${style.projects}`}>
          <ProjectCard project={rdLand} />
          <ProjectCard project={TheCacophone} />
          <a rel="noreferrer" href="https://github.com/fiyintheslim?tab=repositories" target="_blank" className={`btn `}>View More Projects</a>
        </div>
        
      </div>
    </main>
  )
}

export default Projects