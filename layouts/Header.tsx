import React, {useState, useRef} from 'react'
import Link from "next/link"
import style from "../styles/scss/header.module.scss"

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuEle = useRef<HTMLDivElement>(null);
  const handleMenu = () => {
    if(menuEle.current){
      if(menu){
        menuEle.current.style.transform = "translateX(100vw)"
        menuEle.current.style.opacity = "0"
      }else{
        menuEle.current.style.transform = "translateX(0vw)"
        menuEle.current.style.opacity = "1"
      }
      setMenu(!menu)
    }
  }
  return (
    <>
    <header className={`shadow-lg ${style.header}`}>
    <div className={`container-custom ${style.container__flex}`}>
      <Link href="/">
          <p className={`${style.logo}`}>
              <span className="text-blue-500">The</span><span className="text-slate-400">Fiyin</span>
          </p>
        </Link>
        <div className={`${style.hamburger}`}>
            <p className={`text-transparent ${style.hamburger__text} ${style.hamburger__menu}`}>MENU</p>
            <div onClick={handleMenu} className={`${style.hamburger__btn}`}>
                <span className={`bg-slate-400 ${style.line1} ${style.line} one`}></span>
                <span className={`bg-blue-500 ${style.line2} ${style.line} two`}></span>
                <span className={`bg-slate-400 ${style.lin3} ${style.line} three`}></span>
            </div>
      </div>
    </div>
    
    
  </header>
  <div ref={menuEle} className={`${style.menu}`}>
    <div className={`bg-slate-300 dark:bg-neutral-900 ${style.menu__content}`}>
      <a className={`btn ${style.resume}`} href="https://docs.google.com/document/d/1ilIhlrhvWkfaWppdEnsPZiLgO6KkGKkEA2d8UNoT4u8/edit?usp=sharing" rel="noreferrer" target="_blank">My Resume</a>
      <svg onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`fill-slate-700 dark:fill-slate-300 ${style.close}`} viewBox="0 0 16 16">
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
  </div>
  </>
  )
}

export default Header