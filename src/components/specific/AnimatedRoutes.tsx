import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Home from "../../pages/Home";
import Works from "../../pages/Works";

// Define AnimatedRoutes as a separate component without BrowserRouter
function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
