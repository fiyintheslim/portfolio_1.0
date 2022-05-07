import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import {useEffect, useState} from "react"



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
      document.documentElement.classList.add('dark')
      localStorage
      setIsDarkTheme(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkTheme(false)
    }
    setIsDarkTheme(!isDarkTheme)
  }
  return (
  <>
    <Head>
      <link rel="icon" href="favicon.png" />
    </Head>
    
    <Component {...pageProps} />
    <button className="" onClick={()=>handleTheme()}>
    {isDarkTheme ?
        <span aria-label="Light mode" role="img">🌞</span> :
        <span aria-label="Dark mode" role="img">🌜</span>}
    </button>
  </>
  )
}

export default MyApp
