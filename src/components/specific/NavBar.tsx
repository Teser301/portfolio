import React from "react";
import "../../assets/styles/base/navBar.scss";
import { Box } from "@mui/material";

const NavBar: React.FC = () => {
    return (
        <Box
            className="navbar"
            sx={{
                background: "#292929",
                padding: "2rem 15rem",
                margin: "0 auto",
            }}
        >
            <Box className="navbar-left nav-item">
                <span>Home</span>
            </Box>
            <Box className="navbar-right nav-item">
                <span>Works</span>
                <span>Creative</span>
                <span>About</span>
            </Box>
        </Box>
    );
};

export default NavBar;
