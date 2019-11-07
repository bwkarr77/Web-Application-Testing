import React from "react";

const Dashboard = props => {
  console.log(props.atBat);
  const { balls, strikes, fouls } = props.atBat;

  return (
    <div className="dashboard-container">
      <h2>DASHBOARD</h2>
      <button className="pitch">PITCH</button>
      <div className="atBat">
        <h3>AT BAT</h3>
        <p>Strikes: {strikes}</p>
        <p>Balls: {balls}</p>
        <p>Fouls: {fouls}</p>
      </div>
    </div>
  );
};

export default Dashboard;
