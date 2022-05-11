import gsap from "gsap"

export const handlePreloaderHide = (preloader: HTMLDivElement)=> {
    const tl = gsap.timeline()
      tl.to(preloader, {opacity:0, duration: 2, borderRadius:"100%", ease:'power4.out'})
      .to(preloader, {duration:1, display:'none'})
}

export const handleShowMenu = (el: HTMLDivElement) => {
    const tl = gsap.timeline();
    tl.to(el, {transform:"translateX(0vw)", opacity:1, duration:0.3})
        .from(el.querySelector("div"), {transform:"translateY(-100vh)", duration:0.3})

}

export const handleHideMenu = (el: HTMLDivElement) => {
    const tl = gsap.timeline();
    tl.to(el, {transform:"translateX(0vw)", opacity:1, duration:0.3})
    .from(el.querySelector("div"), {transform:"translateY(-100vh)", duration:0.3})

}