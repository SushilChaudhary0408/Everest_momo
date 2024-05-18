import React from 'react';
import { createBrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from './routes/Home';
import AboutUs from "./routes/AboutUs";
import OurService from "./routes/OurService";
import OurMenu from "./routes/OurMenu";

function App() {
  

  return (
    <div>
      <NavBar />
      <Routes>
           <Route  path="/" element={<Home />} />
           <Route  path="/about" element={<AboutUs />} />
           <Route  path="/service" element={<OurService />} />
           <Route  path="/menu" element={<OurMenu />} />
      </Routes>
    </div>
  );
}

export default App;
