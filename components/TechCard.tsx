import React from 'react'
import Image from "next/image"
import style from "../styles/scss/about.module.scss"
interface Props{
    tech:{
        src:string,
        tech: string
    }
}
const TechCard = ({tech}: Props) => {
  return (
    <div className={`${style.card} bg-slate-400 dark:bg-slate-300`}>
        <div className={`${style.logo}`}>
          <Image alt={`${tech.tech}`} width={32} height={32} layout="fill" src={tech.src} />
        </div>
        <p className={`${style.tech}`}>{tech.tech}</p>
    </div>
  )
}

export default TechCard