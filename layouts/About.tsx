import React from 'react'
import styles from "../styles/scss/about.module.scss"

const About = () => {
  return (
      <section>
        <div className={`container container--vertical--spacing ${styles.about}`}>
          <h3 className={`header-1 ${styles.primary_text}`}>
            <span>Hi, I'm </span>
            <span>Fiyinfoluwa Oyekunle</span>
          </h3>
          <h4 className={`header-2`}>
            I build sofware for the web.
          </h4>
          <p className={`content`}>
            I'm a software engineer with 2+ years of experience. I focus on building performant applications, to give people excellent experiences.
            I am currently learning how to create immersive aesthetic experiences through design and animations.  
          </p>
        </div>
      </section>
  )
}

export default About