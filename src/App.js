import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/about" element={About} />
          <Route path="/guides" element={Guides} />
          <Route path="/project" element={ProjectIdeas} />
          <Route path="/contact" element={ContactInfo} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
