import React from 'react'
import Link from "next/link"
import style from "../styles/scss/header.module.scss"

const Header = () => {
  return (
    <header className={`shadow-lg ${style.header}`}>
    <div className={`container ${style.container__flex}`}>
        <p className={`${style.logo}`}>
            <Link href="/">
            <><span className="text-blue-500">The</span><span className="text-slate-400">Fiyin</span></>
            </Link>
        </p>
        <div className={`${style.hamburger}`}>
            <p className={style.hamburger__text}>MENU</p>
            <div className={`${style.hamburger__btn}`}>
            
                <span className={`bg-slate-400 ${style.line1} ${style.line}`}></span>
                <span className={`bg-blue-500 ${style.line2} ${style.line}`}></span>
                <span className={`bg-slate-400 ${style.lin3} ${style.line}`}></span>
            </div>
      </div>
    </div>
  </header>
  )
}

export default Header