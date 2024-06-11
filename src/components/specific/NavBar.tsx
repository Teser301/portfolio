import React from "react";
import "../../assets/styles/base/navBar.scss";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
const NavBar: React.FC = () => {
    return (
        <Box
            className="navbar"
            sx={{
                background: "#292929",
                padding: {
                    xs: "2rem 5rem",
                    sm: "2rem 10rem",
                    md: "2rem 15rem",
                },
                margin: "0 auto",
            }}
        >
            <Box className="navbar-left nav-item">
                <Link to="/">Home</Link>
            </Box>
            <Box className="navbar-right nav-item">
                <Link to="/works">Works</Link>
                <span>Creative</span>
                <span>About</span>
            </Box>
        </Box>
    );
};

export default NavBar;
