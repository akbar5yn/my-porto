import { Route, Routes } from 'react-router'
import './assets/css/main.css'
import About from './pages/About'
import NotFound from './pages/NotFound'


function App() {

  return (
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
