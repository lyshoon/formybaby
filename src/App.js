import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Memories from "./components/Memories";
import Proposal from "./components/Proposal";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router basename="/formybaby">
      <div className="app-container">
        <Routes>
          {/* Login Page */}
          <Route
            path="/"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />

          {/* Memories Page (Protected) */}
          <Route
            path="/memories"
            element={isAuthenticated ? <Memories /> : <Login onLogin={() => setIsAuthenticated(true)} />}
          />

          {/* Proposal Page (Protected) */}
          <Route
            path="/proposal"
            element={isAuthenticated ? <Proposal /> : <Login onLogin={() => setIsAuthenticated(true)} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
