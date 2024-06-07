import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "./assets/styles/main.scss";
import NavBar from "./components/specific/NavBar";
import HeaderBlock from "./components/common/HeaderBlock";
import { Box } from "@mui/material";

const App: React.FC = () => {
    return (
        <div className="App">
            <NavBar />
            <Box className="content">
                <HeaderBlock />
            </Box>
        </div>
    );
};

export default App;
