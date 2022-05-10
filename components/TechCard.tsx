import React from 'react'
import Image from "next/image"
import style from "../styles/scss/card.module.scss"
interface Props{
    tech:{
        src:string,
        tech: string
    }
}
const TechCard = ({tech}: Props) => {
  return (
    <div className={`${style.card}`}>
        <Image width={32} height={32} src={tech.src} />
        <p className={`${style.tech}`}>{tech.tech}</p>
    </div>
  )
}

export default TechCard