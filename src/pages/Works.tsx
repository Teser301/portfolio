import { Box, Typography, Button } from "@mui/material";
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
                <Typography
                    color="primary"
                    variant="h1"
                    sx={{
                        marginBottom: "13px",
                    }}
                >
                    My Work
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: "700px",
                        margin: "20px 0px",
                    }}
                >
                    As a front-end developer, I don't often keep copies of my work. <br />
                </Typography>
            </Box>
        </motion.div>
    );
}

export default Works;
