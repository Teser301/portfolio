import React from "react";
import { motion } from "framer-motion";
function Works() {
    return (
        <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ position: "absolute", x: window.innerWidth, opacity: 0 }}
        >
            <h2>Testing Work</h2>
        </motion.div>
    );
}

export default Works;
