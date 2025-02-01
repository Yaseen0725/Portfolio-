import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing Router components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Services";


function App() {
  return (
    <Router>
      <div>
        {/* Navbar is always visible */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div id="home">
                  <Home />
                </div>
                 <div id="about">
                  <About />
                </div>
                 <div id="service">
                  <Services />
                </div>
              </div>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
