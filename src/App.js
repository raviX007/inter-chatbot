import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Routes
import "./App.css";
import Chatbot from "./components/Chatbot";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          {isAuthenticated && <Route path="/chatbot" element={<Chatbot />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
