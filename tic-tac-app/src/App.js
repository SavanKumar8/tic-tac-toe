import logo from "./logo.svg";
import "./App.css";
import { Box } from "./components/box/box";
import { Board } from "./components/board/board";
import React, { useState } from "react";
import { Scoreboard } from "./components/scoreboard";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [xplaying, setxplaying] = useState(true);

  const [score, setScore] = useState({ xScore: 0, oScore: 0 });

  const [gameOver, setGameOver] = useState(false);
  const handlBoxClick = (index) => {
    const updateboard = board.map((value, idx) => {
      if (idx == index) {
        return xplaying == true ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkAnswer(updateboard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      } else {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
      }
    }
    setBoard(updateboard);
    setxplaying(!xplaying);
  };
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkAnswer = (board) => {
    for (let index = 0; index < WIN_CONDITIONS.length; index++) {
      const [x, y, z] = WIN_CONDITIONS[index];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };
  return (
    <div className="App">
      <Scoreboard score={score} xplaying={xplaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handlBoxClick} />
    </div>
  );
}

export default App;
