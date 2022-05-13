import React from 'react'
import style from "../styles/scss/about.module.scss"
import TechCard from "../components/TechCard"
import PageAnimation from "../components/PageAnimation" 


const technologies=[
  {
    src:"/logos/css.svg",
    tech:"CSS"
  },
  {
    src:"/logos/html.svg",
    tech:"HTML"
  },
  {
    src:"/logos/javascript.svg",
    tech:"Javascript"
  },
  {
    src:"/logos/php-1.svg",
    tech:"PHP"
  },
  {
    src:"/logos/sass-1.svg",
    tech:"SASS"
  },
  {
    src:"/logos/react-2.svg",
    tech:"ReactJS"
  },
  {
    src:"/logos/next-js.svg",
    tech:"NextJS"
  },
  {
    src:"/logos/nodejs-1.svg",
    tech:"NodeJS"
  },
  {
    src:"/logos/express.svg",
    tech:"ExpressJS"
  },
  {
    src:"/logos/mongodb-icon.svg",
    tech:"MongoDB"
  },
  {
    src:"/logos/postgresql.svg",
    tech:"PostgresQL"
  },
  {
    src:"/logos/Laravel.svg",
    tech:"Laravel"
  },
  {
    src:"/logos/typescript.svg",
    tech:"Typescript"
  },
  {
    src:"/logos/tailwind-css.svg",
    tech:"TailwindCSS"
  },
  {
    src:"/logos/socket-io.svg",
    tech:"Socket.io"
  },
  {
    src:"/logos/gsap.svg",
    tech:"GreenSock"
  },
  {
    src:"/logos/redux.svg",
    tech:"Redux"
  }
]

const About = () => {
  return (
    <PageAnimation>
      <main>
        <div className={`container-custom container--vertical--spacing`}>
          <h3 className={`header-1 `}>About me</h3>
          <p className={`content ${style.paragraph}`}>
            Hi, I&apos;m Oyekunle Fiyinfoluwa, a web developer with my focus currently in the frontend.
            I enjoy creating software that works and debugging (The dopamine rush after squashing the bug is amazing). I cannot put a date to when I first picked interest in computers
            but I took my first step, after previous first steps, to becoming a developer in 2020 when I read Head First HTML and CSS during the covid-19 lockdown,
              fastforward to today and I still am mind blown by the possibilities that can be created through computers.
          </p>
          <p className={`content ${style.paragraph}`}>
            I started off on Fiverr where I built a few websites for people using wix.
            Then I have built apps using various technologies which I had to learn in the moment to achieve the expected results while freelancing. 
            Technologies like: shopify liquid, solidity, php & laravel etc.
            Now I am focusing all my energy into building performant and aesthetically pleasing UI.
            I primarily use React.js/Next.js and javascript/typescript.
          </p>
          <p className={`content ${style.paragraph}`}>
            When I am not working, I play video games, watch football matches (Manchester united 😪), read books especially on the human condition (Viktor Frankl, Mark Manson and Robert Greene).
            I also enjoy watching movies especially superhero fiction genres and in my opinion I believe having the ability to get the computer to do exactly what is in mind is a super power. 
          </p>
        </div>
        <div className={`container-custom container--vertical--spacing `}>
          <h3 className={`header-1 `}>Techologies I use.</h3>
          <div className={`${style.technologies}`}>
            {technologies.map((tech, i)=><TechCard key={i} tech={tech}  />)}
          </div>
        </div>
        <div className={`container-custom container--vertical--spacing`}>
          <h3 className={`header-1`}>My Resume</h3>
          <p className={`content ${style.paragraph}`}>Check my resume out to get more information on me.</p>
          <a rel="noreferrer" className={`btn ${style.resume}`} href="https://docs.google.com/document/d/1ilIhlrhvWkfaWppdEnsPZiLgO6KkGKkEA2d8UNoT4u8/edit?usp=sharing" target="_blank">My Resume</a>
        </div>
      </main>
    </PageAnimation>
  )
}

export default About;