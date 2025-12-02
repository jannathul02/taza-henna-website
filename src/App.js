import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
