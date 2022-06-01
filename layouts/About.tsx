import React from 'react'
import styles from "../styles/scss/about.module.scss"

const About = () => {
  return (
      <section className={styles.aboutSection}>
        <div className={`container-custom container--vertical--spacing ${styles.about}`}>
          <h3 className={`header-1 ${styles.primary_text}`}>
            <span>Hi, I'm </span>
            <span>Fiyinfoluwa Oyekunle</span>
          </h3>
          <h4 className={`header-2`}>
            I build sofware for the web.
          </h4>
          <p className={`content`}>
          I create performant web applications and provide amazing user experiences using Javascript and Typescript.
          I use React as my primary frontend library for making web apps as well as other technologies like: CSS, jquery, tailwindCSS, nextJS, postgresQL, redux, mongoDB and node.
          </p>
          <p className={`content`}>
            I am currently concentrating on accessibility, performance, and the creation of immersive aesthetic experiences through design and animations. 
            My strengths are my ability to conceptualize and execute on projects from start to end, my problem solving skills, my ability to learn quickly and my ability to communicate my ideas.

          </p>
        </div>
      </section>
  )
}

export default About