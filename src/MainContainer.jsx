import { Routes, Route } from 'react-router-dom'
//components
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'

const MainContainer = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
      </Routes>
      
    </div>
  )
}

export default MainContainer
