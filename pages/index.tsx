import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from "../layouts/About"
import ProjectCard from "../components/ProjectCard"


const Home: NextPage = () => {
  return (
    <main className="">
      <About />
      <section className={`container-custom py-12 bg-slate-300 dark:bg-neutral-800`}>
        <h3 className={`header-1`}>Some Projects</h3>
        <div>
          <ProjectCard />
        </div>
      </section>
      <section className={`container-custom container--vertical--spacing`}>
        <h3 className={`header-1`}>Contact me.</h3>
        <p className={`content my-8`}>
          You can reach out to me for any questions or collaborations.
        </p>
        <a className={`btn `} href="mailto:fiyinoyekunle@gmail.com" rel="noreferrer" target="_blank">Send an Email</a>
      </section>
    </main>
  )
}

export default Home
