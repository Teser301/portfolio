import React from "react";
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
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    fontSize: "18px",
                    fontWeight: "bold",
                    gap: "1rem",
                    justifySelf: "flex-start",
                }}
            >
                <Link to="/">Home</Link>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    fontSize: "18px",
                    fontWeight: "bold",
                    gap: "1rem",
                    justifySelf: {
                        sm: "flex-start",
                        md: "flex-end",
                    },
                }}
            >
                <Link to="/works">Works</Link>
                <span>Creative</span>
                <span>About</span>
            </Box>
        </Box>
    );
};

export default NavBar;
