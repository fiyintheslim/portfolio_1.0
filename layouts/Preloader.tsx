import React, {useEffect, useRef} from 'react'
import style from "../styles/scss/preloader.module.scss"
import Image from "next/image" 
import gsap from "gsap"
import { reverse } from 'dns'

const Preloader = () => {
    const center = useRef<HTMLDivElement>(null)
    const loading = useRef<HTMLSpanElement>(null)
    const logo = useRef<HTMLParagraphElement>(null)

    const tl = gsap.timeline();
   
    useEffect(()=>{
      let bounce: gsap.core.Tween;
        if(center.current && loading.current && logo.current){
            bounce = gsap.fromTo(center.current, {y:0, height:90}, {y:-80, height:100, background:"linear-gradient(45deg, rgb(0, 0, 0), rgba(69, 76, 168, #ffffff6e55, 255))", duration:0.5, repeat:-1, yoyo:true,  paused:false, ease:'power1'})
            gsap.fromTo(loading.current.children, { opacity:0}, {opacity:1, duration:1, stagger:1, repeat:-1, delay:0.5})

            tl.to(logo.current, {y:60, opacity:1, duration:0.6, ease:"power4.out"})
            .to(logo.current.children[1], {rotation:90, duration:1, x:-20, y:45, ease:"elastic.out"}, "+=0.1")
            .to(logo.current.children[1], {rotation:0, duration:0.5, x:0, y:0, ease:"power4.out"}) 
        }
    }, [])
  return (
    <div className={`${style.preloader} bg-slate-300 dark:bg-neutral-800`}>
        <p ref={logo} className={style.logo}><span className="text-blue-500">The</span><span className="text-slate-900 dark:text-slate-300">Fiyin</span></p>
        <div className={style.container}>
          <div className={style.item} ref={center}></div>
          <div  className={style.texts}>
            <p className="text-slate-900 dark:text-slate-300" >LOADING<span ref={loading}><span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></span></p>
          </div>
        </div>
    </div>
  )
}

export default Preloader