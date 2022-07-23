import * as React from "react";
import { Routes, Route  } from "react-router-dom";
import Background from "./components/common/background";
import Home from './pages/Home';
import CurrentForecast from './pages/CurrentForecast';
import Forecast7 from './pages/Forecast7';

function App() {

  return (
    <>
      <Background />
        {/* // TODO: найти реализацию анимации */}
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="current-forecast" element={<CurrentForecast />} />
          <Route path="forecast-for-week" element={<Forecast7 />} />
        </Routes>
    </>
  );
}

export default App;
