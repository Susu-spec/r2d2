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
    // const ref = useRef(null);
    // const isInView = useInView(ref, { amount: 0.5 });
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
                {/* <span className='cursor inline-block'></span> */}
        </motion.span>
    </p>
  )
}

//
// ref={ref}

export default AnimatedText

// animate={ isInView ? "visible" : "hidden"}