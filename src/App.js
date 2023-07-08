import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from "./components/Header";
import "./styles/App.scss";
import "./styles/header.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
