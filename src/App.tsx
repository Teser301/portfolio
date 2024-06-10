import React from "react";
import "./assets/styles/main.scss";
import NavBar from "./components/specific/NavBar";
import HeaderBlock from "./components/common/HeaderBlock";
import { Box } from "@mui/material";

const App: React.FC = () => {
    return (
        <Box
            className="App"
            sx={{
                maxWidth: "1440px",
                margin: "0 auto",
                borderTop: "0",
                borderBottom: "0",
            }}
        >
            <NavBar />
            <Box
                className="content"
                sx={{
                    maxWidth: "1170px",
                    margin: "0 auto",
                }}
            >
                <HeaderBlock />
            </Box>
        </Box>
    );
};

export default App;
