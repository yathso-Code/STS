import React from 'react'
import './App.css';
import Footer from './component/reuse/Footer';
import Navbar from './component/reuse/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Course from './component/Course';
import OnlineLearn from './component/OnlineLearn';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/course" element={ <Course/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/onlineLearn" element={ <OnlineLearn/> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
