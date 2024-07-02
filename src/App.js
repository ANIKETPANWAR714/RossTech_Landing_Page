import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import HowItWorks from './components/HowItWorks';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='appcontainer'>
       <Router>
    
    <NavBar />
    <Routes>
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/" element={<Home />} />
      
    </Routes>
 

</Router>
    <Footer />

    </div>
   
  );
}

export default App;

