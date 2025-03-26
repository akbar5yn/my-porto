import { Navigate, Route, Routes, useLocation } from 'react-router'
import './assets/css/main.css'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Experience from './pages/Experience'
import { AnimatePresence } from 'motion/react'


function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
