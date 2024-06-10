import React from "react";
import "./assets/styles/main.scss";
import NavBar from "./components/specific/NavBar";
import HeaderBlock from "./components/common/HeaderBlock";
import { Box, Divider, Grow } from "@mui/material";

const App: React.FC = () => {
    return (
        <Box>
            <NavBar />
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
    );
};

export default App;
