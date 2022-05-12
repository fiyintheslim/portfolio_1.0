import React, {useState, useRef} from 'react'
import Link from "next/link"
import style from "../styles/scss/header.module.scss"
import Menu from "./Menu"
import {handleShowMenu, handleHideMenu, handleBurgerEnter, handleBurgerLeave} from "../utilities/animations"

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuEle = useRef<HTMLDivElement>(null);
  const burgerMenu = useRef<HTMLDivElement>(null);

  
  const handleMenu = (e:React.MouseEvent) => {
  
    if(menuEle.current){
      if(menu){
        handleHideMenu(menuEle.current)
      }else{
        handleShowMenu(menuEle.current)
      }
      setMenu(!menu)
    }
  }
  const cursorEnter = () => {
    if(burgerMenu.current)
    handleBurgerEnter(burgerMenu.current)
  }

  const cursorLeave = () => {
    if(burgerMenu.current){
      handleBurgerLeave(burgerMenu.current)
    }
  }
  
  return (
    <>
    <header className={`shadow-lg ${style.header}`}>
    <div className={`container-custom ${style.container__flex}`}>
      <Link href="/">
          <p className={`${style.logo}`}>
              <span className="text-blue-500">The</span><span className="text-slate-900 dark:text-slate-300">Fiyin</span>
          </p>
        </Link>
        <div className={`${style.hamburger}`}>
            <p className={`text-transparent ${style.hamburger__menu}`}>MENU</p>
            <div ref={burgerMenu} onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} onClick={handleMenu} className={`${style.hamburger__btn}`}>
                <span className={`bg-slate-400 ${style.line1} ${style.line} one`}></span>
                <span className={`bg-blue-500 ${style.line2} ${style.line} two`}></span>
                <span className={`bg-slate-400 ${style.lin3} ${style.line} three`}></span>
            </div>
      </div>
    </div>
  </header>
  <Menu menuEle={menuEle} handleMenu={handleMenu} />
  </>
  )
}

export default Header