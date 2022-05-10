import React from 'react'
import style from "../styles/scss/about.module.scss"
import TechCard from "../components/TechCard"

const technologies=[
  {
    src:"/logos/css.svg",
    tech:"CSS"
  },
  {
    src:"/logos/express.svg",
    tech:"ExpressJS"
  }
]

const About = () => {
  return (
    <main>
      <div className={`container-custom container--vertical--spacing`}>
        <h3 className={`header-1 `}>About me</h3>
        <p className={`content ${style.paragraph}`}>
          Hi, I'm Oyekunle Fiyinfoluwa, a web developer with my focus currently in the frontend.
           I enjoy creating software that works and debugging (The dopamine rush after squashing the bug is amazing). I can't put a date to when I first picked interest in computers
           but I took my first step, after previous first steps, to becoming a developer in 2020 when I read O'Reilly's Head First HTML and CSS during the covid-19 lockdown,
            fastforward to today and I still am mind blown by the possibilities that can be created through computers.
        </p>
        <p className={`content ${style.paragraph}`}>
          I started off on Fiverr where I built a few websites for people using wix.
           Then I have built apps using various technologies which I had to learn in the moment to achieve the expected results while freelancing. 
           Technologies like: shopify liquid, solidity, php & laravel etc.
           Now I'm focusing all my energy into building performant and aesthetically pleasing UI.
           I primarily use React.js/Next.js and javascript/typescript.
        </p>
        <p className={`content ${style.paragraph}`}>
          When I'm not working, I play video games, watch football matches (Manchester united 😪), read books especially on the human condition (Viktor Frankl, Mark Manson and Robert Greene).
          I also enjoy watching movies especially superhero fiction genres and in my opinion I believe having the ability to get the computer to do exactly what's in mind is a super power. 
        </p>
      </div>
      <div className={`container-custom container--vertical--spacing `}>
        <h3 className={`header-1 `}>Techologies I use</h3>
        <div className={`${style.technologies}`}>
          {technologies.map((tech)=><TechCard tech={tech}  />)}
        </div>
      </div>
    </main>
  )
}

export default About