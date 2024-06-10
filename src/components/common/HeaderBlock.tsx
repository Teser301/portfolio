import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./../../assets/styles/components/headerBlock.scss";

const HeaderBlock = () => {
    return (
        <Box
            className="headerBlock"
            sx={{
                textAlign: "left",
                marginBottom: "45px",
            }}
        >
            <Typography color="primary" variant="h1">
                👋 Hi, I'm Carlo Aavekukk.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    margin: "20px 0px",
                }}
            >
                As a front-end developer, I thrive on crafting streamlined, visually stunning
                designs. My focus is on delivering seamless user experiences through efficient
                website optimization. Transforming complex ideas into simple, intuitive interfaces
                is not just a job—it's my passion. And when everything clicks into place with just a
                single click, the sense of satisfaction is truly unparalleled.
            </Typography>
            <Button variant="outlined">View my work</Button>
        </Box>
    );
};

export default HeaderBlock;
