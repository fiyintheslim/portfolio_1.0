import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import {useEffect, useState, useRef} from "react"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Preloader from "../layouts/Preloader"
import loadConfig from 'next/dist/server/config'
import {handlePreloaderHide} from "../utilities/animations"



function MyApp({ Component, pageProps }: AppProps) {
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
    <div id="preloader-container" ref={preloader}>
      <Preloader />
    </div>
    <Header />
    <Component {...pageProps} />
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
