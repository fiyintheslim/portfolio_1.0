import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import About from "../layouts/About"


const Home: NextPage = () => {
  return (
    <main className="">
      <About />
    </main>
  )
}

export default Home
