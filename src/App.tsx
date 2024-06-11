import React from "react";
import NavBar from "./components/specific/NavBar";
import AnimatedRoutes from "./components/specific/AnimatedRoutes";
import { CssBaseline } from "@mui/material";

const App: React.FC = () => {
    return (
        <div>
            <CssBaseline />
            <NavBar />
            <AnimatedRoutes />
        </div>
    );
};

export default App;
