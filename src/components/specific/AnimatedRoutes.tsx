import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../../pages/Home";
import Works from "../../pages/Works";
import About from "../../pages/About";

// Define AnimatedRoutes as a separate component without BrowserRouter
function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
