import React, {useRef} from 'react'
import Link from "next/link"
import style from "../styles/scss/header.module.scss"
import gsap from "gsap"

interface Props{
    handleMenu: (e:React.MouseEvent)=>void,
    menuEle: React.LegacyRef<HTMLDivElement>
}
const Menu = ({handleMenu, menuEle}:Props) => {
    const stopProp = (e:React.MouseEvent)=>{
        e.stopPropagation()
    }
  return (
      <>
    <div onClick={(e)=>handleMenu(e)} ref={menuEle} className={`${style.menu}`}>
        <div onClick={stopProp} id="content" className={`bg-slate-300 dark:bg-neutral-900 ${style.menu__content}`}>
        <a className={`btn ${style.resume}`} href="https://docs.google.com/document/d/1ilIhlrhvWkfaWppdEnsPZiLgO6KkGKkEA2d8UNoT4u8/edit?usp=sharing" rel="noreferrer" target="_blank">My Resume</a>
        <svg onClick={(e)=>handleMenu(e)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`fill-slate-700 dark:fill-slate-300 ${style.close}`} viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
            <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
        </svg>
        <Link  href="/" >
            <p onClick={handleMenu} className={`text-slate-700 dark:text-slate-300 ${style.hamburger__text} ${style.link}`}>HOME</p>
        </Link>
        <Link href="/projects">
            <p onClick={handleMenu} className={`text-slate-700 dark:text-slate-300 ${style.hamburger__text} ${style.link}`}>PROJECTS</p>
        </Link>
        <Link href="/about">
            <p onClick={handleMenu} className={`text-slate-700 dark:text-slate-300 ${style.hamburger__text} ${style.link}`}>ABOUT</p>
        </Link>
        <Link href="/contact" >
            <p onClick={handleMenu} className={`text-slate-700 dark:text-slate-300 ${style.hamburger__text} ${style.link}`}>CONTACT</p>
        </Link>
        </div>
        <div className={`behind dark:bg-slate-200 bg-neutral-900 ${style.bg}`}></div>
    </div>
    
    </>
  )
}

export default Menu