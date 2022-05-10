import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import About from "../layouts/About"


const Home: NextPage = () => {
  return (
    <main className="">
      <About />
      <div className={`container-custom`}>
        <h3 className={`container-custom`}></h3>
      </div>
      <div className={`container-custom`}>
        <h3 className={`header-1`}>Contact me.</h3>
        <p className={`content my-8`}>
          You can reach out to me for any questions or collaborations.
        </p>
        <a className={`btn `} href="mailto:fiyinoyekunle@gmail.com" rel="noreferrer" target="_blank">Send an Email</a>
      </div>
    </main>
  )
}

export default Home
