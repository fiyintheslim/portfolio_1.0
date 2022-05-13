import gsap from "gsap"


export const handlePreloaderHide = (preloader: HTMLDivElement)=> {
    const tl = gsap.timeline()
      tl.to(preloader, {transform:"translateY(-120vh)", duration: 1.5, ease:'power4.out'})
      .to(preloader, {duration:0.5, display:'none'}, "+=1")
}

export const handleShowMenu = (el: HTMLDivElement) => {
    const tl = gsap.timeline();
    let divs = el.querySelectorAll("div")
    console.log("childre", divs[1].children)
    tl.to(el, {transform:"translateX(0vw)", opacity:1, duration:0.3})
        .fromTo(divs[2], {transform:"translateY(-120vh)"}, {transform:"translateY(0vh)", duration:0.2, ease:"power4.easeOut"}, )
        .fromTo(divs[0], {transform:"translateY(-120vh)"}, {transform:"translateY(0vh)", duration:0.2}, "-=0.1")
        .fromTo(divs[1].children, {transform:"translateX(80vw)"}, {transform:"translateX(0vw)", duration:0.3,stagger: 0.1, ease:"back"} )

}

export const handleHideMenu = (el: HTMLDivElement) => {
    let divs = el.querySelectorAll("div")
    const tl = gsap.timeline();
    
    tl.to(divs[1].children, {transform:"translateX(80vw)", duration:0.2, stagger: -0.1, ease:"back.in"})
    .to(divs[0], {transform:"translateY(-120vh)", duration:0.2})
    .to(divs[2], {transform:"translateY(-120vh)", duration:0.3, ease:"power4.easeOut"}, "-=0.18")
    .to(el, {transform:"translateX(150vw)", opacity:1, duration:0.1})
}

export const handleBurgerEnter =(el:HTMLDivElement) => {
    let lines = el.children
    gsap.to(lines[0], 
        {y:-2, x:1, transform:"rotate(5deg)", duration:0.3}
        )

    gsap.to(lines[1], 
        {x:3, duration:0.3}
        )

    gsap.to(lines[2], 
        {y:2, x:1, transform:"rotate(-5deg)", duration:0.3}
        )
}

export const handleBurgerLeave = (el:HTMLDivElement)=>{
    let lines = el.children
    gsap.to(lines[0], {y:0, x:0, transform:"rotate(0deg)", duration:0.5})

    gsap.to(lines[1], {x:0, duration:0.3})

    gsap.to(lines[2], {y:0, x:0, transform:"rotate(0deg)", duration:0.5})
}