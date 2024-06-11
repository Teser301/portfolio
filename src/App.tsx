import React from "react";
import NavBar from "./components/specific/NavBar";
import { Box, Divider, Grow } from "@mui/material";
import AnimatedRoutes from "./components/specific/AnimatedRoutes";
import { CssBaseline } from "@mui/material";

const App: React.FC = () => {
    return (
        <div>
            <CssBaseline />
            <NavBar />
            <div style={{ overflowX: "hidden" }}>
                <AnimatedRoutes />
            </div>
        </div>
    );
};

export default App;
