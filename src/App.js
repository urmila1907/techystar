import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
