import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./mycomponents/Navbar.jsx";
import Home from "./pages/Home";
import About from "./mycomponents/About";
import Projects from "./mycomponents/Projects";
import Skills from "./mycomponents/Skills";
import Contact from "./mycomponents/Contact";
import Footer from "./mycomponents/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
