import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import {useEffect, useState, useRef} from "react"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Preloader from "../layouts/Preloader"
import loadConfig from 'next/dist/server/config'
import {handlePreloaderHide} from "../utilities/animations"
import style from "../styles/scss/preloader.module.scss"
import {AnimatePresence} from "framer-motion"
import { Router } from 'next/router'



function MyApp({ Component, pageProps, router}: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [loading, setLoading] = useState(true)

  const preloader = useRef<HTMLDivElement>(null)
  

  useEffect(()=>{
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDarkTheme(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkTheme(false)
    }
    setLoading(false)
    
    setTimeout(()=>{
      handlePreloaderHide(preloader.current!)
    }, 2000)
  
  }, [])
  const handleTheme = ()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = "light"
      setIsDarkTheme(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = "dark"
      setIsDarkTheme(true)
    }
    setIsDarkTheme(!isDarkTheme)
  }
  return (
  <>
    <Head>
      <link rel="icon" href="favicon.png" />
      <title>Oyekunle Fiyinfoluwa | Software developer</title>
    </Head>
    <div className={style.preloaderContainer}id="preloader-container" ref={preloader}>
      <Preloader />
    </div>
    <Header />
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
    <Footer />
    <button className="fixed right-2 bottom-2 w-12 h-12 rounded-full shadow bg-slate-900 outline-none dark:bg-slate-100" onClick={()=>handleTheme()}>
    {isDarkTheme ?
        <span aria-label="Light mode" role="img">🌞</span> :
        <span aria-label="Dark mode" role="img">🌜</span>}
    </button>
    
  </>
  )
}

export default MyApp
