import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import MatchScout from "./MatchScout";
import PitScout from "./PitScout";
import TeamPages from "./TeamPages";
import PitDisplay from "./PitDisplay";
import DataDisplay from "./DataDisplay";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="matchscout" element={<MatchScout />} />
      <Route path="pitscout" element={<PitScout />} />
      <Route path="teampages" element={<TeamPages />} />
      <Route path="pitdisplay" element={<PitDisplay />} />
      <Route path="datadisplay" element={<DataDisplay />} />
    </Routes>
  );
};

export default App;