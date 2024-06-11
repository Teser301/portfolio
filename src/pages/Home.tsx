import React from "react";
import { Box, Divider, Grow, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Home: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ position: "absolute", x: window.innerWidth, opacity: 0 }}
        >
            <Box
                sx={{
                    textAlign: "left",
                    padding: "5rem 15rem",
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
                    👋 Hi, I'm Carlo Aavekukk.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: "700px",
                        margin: "20px 0px",
                    }}
                >
                    As a front-end developer, I thrive on crafting streamlined, visually stunning
                    designs. My focus is on delivering seamless user experiences through efficient
                    website optimization. Transforming complex ideas into simple, intuitive
                    interfaces is not just a job—it's my passion. <br />
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: "700px",
                        margin: "20px 0px",
                    }}
                >
                    And when everything clicks into place with just a single click, the sense of
                    satisfaction is truly unparalleled.
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        textTransform: "capitalize",
                    }}
                >
                    View my work
                </Button>
            </Box>
            <Divider />
        </motion.div>
    );
};

export default Home;
