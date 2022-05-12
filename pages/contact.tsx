import React from 'react'
import style from "../styles/scss/contact.module.scss"

const Contact = () => {
  return (
    <main className={`${style.main}`}>
        <div className={`container-custom ${style.container}`}>
            <h3 className={`header-1`}>Get In Touch</h3>
            <p className={`content`}>My inbox is always open for collaborations and new opportunities. Leave me a message, I try to respond A$AP.</p>
            <div className={`${style.socials__container}`}>
                <a className={`btn ${style.email__btn}`} href="mailto:fiyinoyekunle@gmail.com" rel="noreferrer" target="_blank">Send an Email</a>
                <div className={`${style.socials}`}>
                    <a className={`text-transparent ${style.social}`} rel="noreferrer"  target="_blank" href="https://github.com/fiyintheslim">Github</a>
                    <a className={`text-transparent ${style.social}`} rel="noreferrer"  target="_blank" href="https://twitter.com/fiyintheslim">Twitter</a>
                    <a className={`text-transparent ${style.social}`} rel="noreferrer"  target="_blank" href="https://www.linkedin.com/in/fiyinfoluwa-oyekunle-36a001195">LinkedIn</a>
                </div>
            </div>
            
        </div>
        
    </main>
  )
}

export default Contact