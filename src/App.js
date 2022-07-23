import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Background from "./components/common/Background";
import Home from './pages/Home';
import CurrentForecast from './pages/CurrentForecast';

import { AnimatePresence } from 'framer-motion'
// import {} from 'framer-motion/dist/framer-motion'

function App() {
  const location = useLocation();

  return (
    <>
      <Background />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="current-forecast" element={<CurrentForecast />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
