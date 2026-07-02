import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home.jsx'
import Card from './Card.jsx' 
import NavbarHeader from './NavbarHeader.jsx'

function App() {
  return (
    <BrowserRouter>
      <NavbarHeader />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buildings" element={<Card />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
