import React from "react";

const Display = props => {
  console.log(props.inning, props.scores);
  const { home, away } = props.scores;
  const { outs, onBase } = props.inning;
  return (
    <div className="display-container">
      <h2>DISPLAY</h2>
      <div className="inning-results">
        <p>HOME: {home}</p>
        <p>AWAY: {away}</p>
        <p>OUTS: {outs}</p>
        <p>ON BASE: {onBase}</p>
      </div>
    </div>
  );
};

export default Display;
