import React from "react";
import { Box } from "../box/box";
import "./board.css";

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((item, index) => {
        return <Box value={item} onClick={() => onClick(index)} />;
      })}
    </div>
  );
};
