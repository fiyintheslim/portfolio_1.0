import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Logo, Main} from "../styles/styledComponents"

const Home: NextPage = () => {
  return (
    <Main>
      <header>
        <Logo src="/logo.png" />
      </header>
      <section></section>
      <footer></footer>
    </Main>
  )
}

export default Home
