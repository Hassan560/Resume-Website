import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Component/Pages/About/About";
import Skills from "./Component/Pages/Skills/Skills";
import Education from "./Component/Pages/Education/Education";
import Profile from "./Component/Pages/Profile";
import Header from "./Component/Header/Header";
function App() {
  return (
    <div className="Resume__header">
      <Header />
      <div className="Resume__body">
        <Profile />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Education" element={<Education />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
