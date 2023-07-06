import React from "react";
import "./scoreboard.css";
export const Scoreboard = ({ score, xplaying }) => {
  const { xScore, oScore } = score;
  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xplaying && "inactive"}`}>
        X - {xScore}
      </span>
      vs
      <span className={`score o-score ${xplaying && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
  );
};
