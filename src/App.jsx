import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing Router components
import Navbar from "./components/Navbar";
import Home from "./components/Home";

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
              </div>
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
