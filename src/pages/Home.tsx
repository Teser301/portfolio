import React from "react";
import { Box, Divider, Grow } from "@mui/material";
import { motion } from "framer-motion";
import HeaderBlock from "./../components/common/HeaderBlock";

const Home: React.FC = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >
            <Box>
                <Grow in={true} mountOnEnter unmountOnExit>
                    <Box
                        className="App"
                        sx={{
                            padding: "5rem 15rem",
                            margin: "0 auto",
                            borderTop: "0",
                            borderBottom: "0",
                        }}
                    >
                        <Box
                            className="content"
                            sx={{
                                padding: "0 5rem",
                                margin: "0 auto",
                            }}
                        >
                            <HeaderBlock />
                        </Box>
                    </Box>
                </Grow>
                <Divider />
            </Box>
        </motion.div>
    );
};

export default Home;
