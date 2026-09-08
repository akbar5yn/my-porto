import { Navigate, Route, Routes, useLocation } from "react-router";
import "./assets/css/main.css";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "motion/react";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={<Navigate to="/about#about-description" replace />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/experience"
          element={<Navigate to="/about#experience-carousel" replace />}
        />
        <Route
          path="/projects"
          element={<Navigate to="/about#project-item-1" replace />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
