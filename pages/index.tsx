import type { NextPage } from 'next'
import Link from "next/link"
import About from "../layouts/About"
import ProjectCard from "../components/ProjectCard"
import {TheCacophone, rdLand} from "../utilities/projects"
import PageAnimation from "../components/PageAnimation"


const Home: NextPage = () => {
  return (
    <PageAnimation>
      <main className="">
        <About />
        <section className={`container-custom py-12 bg-slate-200 dark:bg-neutral-800`}>
          <h3 className={`header-1`}>Some Projects</h3>
          <div className={`my-3 flex flex-col items-center`}>
            <ProjectCard project={TheCacophone} />
            <ProjectCard project={rdLand} />
            <Link  href="/projects"><p className="btn">View More</p></Link>
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
    </PageAnimation>
  )
}

export default Home
