import React from 'react'
import styles from "../styles/scss/about.module.scss"

const About = () => {
  return (
      <section>
        <div className={`container-custom container--vertical--spacing ${styles.about}`}>
          <h3 className={`header-1 ${styles.primary_text}`}>
            <span>Hi, I'm </span>
            <span>Fiyinfoluwa Oyekunle</span>
          </h3>
          <h4 className={`header-2`}>
            I build sofware for the web.
          </h4>
          <p className={`content`}>
          I have 2+ years of experience as a software engineer. I create high-performance online applications that provide amazing user experiences.
          I am currently concentrating on accessibility, performance, and the creation of immersive aesthetic experiences through design and animations. 
          </p>
        </div>
      </section>
  )
}

export default About