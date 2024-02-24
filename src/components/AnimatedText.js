import React from 'react';
import { motion } from "framer-motion";


const defaultAnimations = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
    transition: {
        duration: .1
    }

}

const AnimatedText = (AnimatedTextProps) => {
    let { text, className} = AnimatedTextProps;
    return (
    <p className={className}>
        <span className='sr-only'>{text}</span>
        <motion.span initial="hidden" 
            animate="visible" 
            transition={{ staggerChildren: 0.08 }} 
            aria-hidden>
                {text.split('').map((word) => 
                    <span className='inline-block'>
                        {word.split('').map((char) =>
                            <motion.span variants={defaultAnimations}>
                                {char}
                            </motion.span>
                        )}
                    </span> 
                )}
        </motion.span>
        <span>.</span>
    </p>
  )
}


export default AnimatedText