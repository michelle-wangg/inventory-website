import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useEffect, useState } from "react";
import Home from './components/Home';
import About from './components/About';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://inventory-website-cqbt.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <h1>{message}</h1>
      </div>
    </Router>
  );
}

export default App;
