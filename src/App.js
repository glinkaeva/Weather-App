import * as React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Background from "./components/common/Background";
import Home from './pages/Home';
import CurrentForecast from './pages/CurrentForecast';

import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();
  const saveCity = localStorage.getItem('saveCity');

  return (
    <>
      <Background />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={(saveCity) ? <Navigate to="/current-forecast" /> : <Home />} replace />
          <Route path="current-forecast" element={<CurrentForecast />} replace />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
