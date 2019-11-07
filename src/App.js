import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [atBat, setAtBat] = useState({
    strikes: 1,
    balls: 0,
    fouls: 55
  });
  const [scores, setScores] = useState({
    home: 22,
    away: 4
  });
  const [inning, setInning] = useState({
    outs: 2,
    onBase: 5
  });

  return (
    <div className="App">
      <Display inning={inning} scores={scores} />
      <Dashboard atBat={atBat} />
    </div>
  );
}

export default App;
