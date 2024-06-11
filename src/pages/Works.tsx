import React from "react";
import { motion } from "framer-motion";
function Works() {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >
            Works
        </motion.div>
    );
}

export default Works;
