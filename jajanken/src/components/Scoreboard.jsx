import React from "react";
import "../styles/Scoreboard.css";

const Scoreboard = ({ wins }) => {
  return (
    <div className="scoreboard">
      <div className="title">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score">
        <span>score</span>
        <span>{wins}</span>
      </div>
    </div>
  );
};

export default Scoreboard;
