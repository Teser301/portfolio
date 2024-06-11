import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
function Works() {
    return (
        <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ position: "absolute", x: window.innerWidth, opacity: 0 }}
        >
            <Box
                sx={{
                    textAlign: "left",
                    padding: {
                        xs: "5rem 5rem",
                        sm: "5rem 10rem",
                        md: "5rem 15rem",
                    },
                    paddingBottom: "45px",
                }}
            >
                <h1>Work</h1>
            </Box>
        </motion.div>
    );
}

export default Works;
