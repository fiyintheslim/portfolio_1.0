import React from 'react'
import Link from "next/link"
import style from "../styles/scss/header.module.scss"

const Header = () => {
  return (
    <header className={`shadow-lg ${style.header}`}>
    <div className="container">
        <p className={`${style.logo}`}>
            <Link href="/">
            TheFiyin
            </Link>
        </p>
        <div className={style.hamburger}>
            <p className={style.hamburger__text}>MENU</p>
            <div className={`${style.hamburger__btn}`}>
                <span className={`${style.line1}`}></span>
                <span className={`${style.line2}`}></span>
                <span className={`${style.lin3}`}></span>
            </div>
      </div>
    </div>
  </header>
  )
}

export default Header