
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './pages/Componets/Navbar'
import ContactPage from './pages/ContactPage';
import Home from './pages/Home'
import PortfolioPage from './pages/PortfolioPage';



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-page" element={<ContactPage/>} />
          <Route path="/portfolio-page" element={<PortfolioPage/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
