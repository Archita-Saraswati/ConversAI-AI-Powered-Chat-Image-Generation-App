import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import ImageGenerator from "./components/ImageGenerator/ImageGenerator";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/image-generator" element={<ImageGenerator />} />
      </Routes>
    </Router>
  );
};

export default App;
