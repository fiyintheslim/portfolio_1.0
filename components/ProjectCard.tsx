import React from 'react'
import Image from "next/image"
import style from "../styles/scss/projectcard.module.scss"


interface Props {
  project:{
    name:string,
    src:string,
    desc:string,
    tech:string[],
    links:{
      github:string,
      live:string
    }
  }
}
// const tech = ['VS', 'Code', 'Sublime', 'Text', 'Atom','iTerm2', 'Hyper', 'Halcyon', 'Theme']
const ComponentCard = ({project} : Props) => {
  const {name, src, desc, tech, links} = project
  return (
    <div className={`${style.projectContainer}`}>
      <div className={`${style.info}`}>
        <h3 className={`header-2 ${style.title}`}>{name}</h3>
        <p className={`content-2 ${style.description} bg-inherit text-slate-50 lg:text-neutral-900 lg:bg-neutral-100 w-full rounded lg:p-8 max-w lg:max-w-xl dark:text-neutral-100 dark:lg:bg-neutral-900`}>{desc}</p>
        <p className={`${style.technologies}  text-blue-600 dark:text-blue-600 text-lg font-bold`}>
          {tech.map((t, i) => <span key={i} className={`drop-shadow-2xl ${style.tech}`}>{t}</span>)}
        </p>
        <div className={`${style.iconsContainer}`}>
          {links.github &&
          <a rel="noreferrer" target="_blank" href={links.github}>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-github ${style.icon} stroke-slate-700 dark:stroke-slate-300 hover:stroke-blue-600`}>
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          }
          {links.live &&
            <a rel="noreferrer" target="_blank" href={links.live}>
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-external-link ${style.icon} stroke-slate-700 dark:stroke-slate-300 hover:stroke-blue-600`}>
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          }
        </div>
      </div>
      <div className={`${style.img}`}>
        <Image layout="fill" src={src} />
      </div>
    </div>
  )
}

export default ComponentCard