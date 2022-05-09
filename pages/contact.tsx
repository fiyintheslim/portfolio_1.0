import React from 'react'
import style from "../styles/scss/contact.module.scss"

const Contact = () => {
  return (
    <main>
        <div className={`container`}>
            <h3 className={`header-1`}>Get In Touch</h3>
            <p className={`content`}>My inbox is always open to people and new opportunities. Leave me a message and I will respond A$AP.</p>
            <div className={`${style.socials__container}`}>
                <a className={`btn`} href="mailto:fiyinoyekunle@gmail.com" target="_blank">Send an Email</a>
                <div>
                    <a className={` ${style.socials}`} rel="noreferrer"  target="_blank" href="">Github</a>
                    <a className={` ${style.socials}`} rel="noreferrer"  target="_blank" href="">Twitter</a>
                    <a className={` ${style.socials}`} rel="noreferrer"  target="_blank" href="">LinkedIn</a>
                </div>
            </div>
            
        </div>
        
    </main>
  )
}

export default Contact