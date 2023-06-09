import React from "react";
import { motion } from "framer-motion";

const animation = {
    initial: {},
    animate: {},
    exit: {},
}

const AnimatedPage = ({children}) => {
    return (
        <motion.div>
            {children}
        </motion.div>
    )
}

export {AnimatedPage};