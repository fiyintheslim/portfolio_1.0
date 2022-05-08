import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import {useEffect, useState} from "react"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import style from "../styles/scss/header.module.scss"



function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDarkTheme(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkTheme(false)
    }
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
    </Head>
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
