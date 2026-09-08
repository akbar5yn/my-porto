import { Navigate, Route, Routes, useLocation } from "react-router";
import "./assets/css/main.css";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "motion/react";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
