import React from "react";
import { motion } from "framer-motion";

const animation = {
    initial: { opacity: 0.8 },
    animate: { opacity: 1, transition: { duration: 0.7 } },
    exit: { opacity: 0.8, transition: { duration: 0.7 } },
};

const AnimatedPage = ({children}) => {
    return (
        <motion.div variants={animation} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
    )
}

export {AnimatedPage};