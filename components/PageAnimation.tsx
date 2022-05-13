import React from 'react'
import {motion} from "framer-motion"
import style from "../styles/scss/pageanimation.module.scss"
import Image from "next/image"
interface Props{
    children: React.ReactNode
}
const PageAnimation = ({children}:Props) => {
    const variantSlideIn = {
        initial:{
            scaleX:0,
        },
        animate:{
            scaleX:0,
            
        },
        exit:{
            scaleX:1
            
        }
    }
  return (
      <>
        {children}
        <motion.div
            className={`${style.slideIn} bg-neutral-900 dark:bg-slate-300`}
            variants={variantSlideIn}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration:1, 
                ease:"easeInOut", 
                when:"beforeChildren"
                
            }}
            
        >
            <div className={`${style.hideImage}`}>
                <motion.div 
                className={style.logo}
                initial={{y:400}}
                animate={{y:400}}
                exit={{y:0}}
                transition={{duration:0.3, ease:"easeInOut",}}
                >
                    <Image layout="fill" src="/logo.png" />
                </motion.div>
            </div>
            
        </motion.div>
        <motion.div
            className={`${style.slideOut} bg-neutral-900 dark:bg-slate-300`}
            initial={{scaleX:1}}
            animate={{scaleX:0}}
            exit={{scaleX:0}}
            transition={{
                duration: 0.8, 
                ease:"easeInOut",
                when:"afterChildren"
             }}

        >
            <div className={style.hideImage}>
                <motion.div 
                    className={style.logo}
                    initial={{y:0}}
                    animate={{y:400}}
                    transition={{duration:0.5, ease:"easeInOut",}}
                >
                    <Image layout="fill" src="/logo.png" />
                </motion.div>
            </div>
            
        </motion.div>
      </>
  )
}

export default PageAnimation