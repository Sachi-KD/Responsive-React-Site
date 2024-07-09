import React from "react";
import './App.css';
import Home from "./components/pages/Home";
import Contactus from "./components/pages/Contact";
import Aboutus from "./components/pages/About";
import Navbar from "./components/inc/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/inc/Footer';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/about" element={<Aboutus />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
