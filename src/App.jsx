// import React from 'react'

import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Templates/Popular";

const App = () => {
  return (
    <div className="bg-[#1f1e24] h-screen w-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
};

export default App;
