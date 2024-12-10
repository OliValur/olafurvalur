"use client";
import React, { useState } from "react";

export default function Board({
  player1Symbol,
  player2Symbol,
  handleEnd,
}: {
  player1Symbol: string;
  player2Symbol: string;
  handleEnd: (mode: number) => void;
}) {
  interface Dictionary<T> {
    [key: string]: T;
  }

  const [currentPlayer, setCurrentPlayer] = useState<string>(player1Symbol);
  const [turn, setTurn] = useState<number>(5);
  const [board, setBoard] = useState<Dictionary<string>>({
    a1: "X",
    a2: "X",
    a3: "",
    b1: "O",
    b2: "O",
    b3: "",
    c1: "",
    c2: "",
    c3: "",
  });
  const [winningCombo, setWinningCombo] = useState<string[]>(["", "", ""]);

  const resetBoard = () => {
    setBoard({
      a1: "X",
      a2: "X",
      a3: "",
      b1: "O",
      b2: "O",
      b3: "",
      c1: "",
      c2: "",
      c3: "",
    });
    setTurn(1);
    setCurrentPlayer(player1Symbol);
  };

  const winningCombos: string[][] = [
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"],
    ["a1", "b1", "c1"],
    ["a2", "b2", "c2"],
    ["a3", "b3", "c3"],
    ["a1", "b2", "c3"],
    ["a3", "b2", "c1"],
  ];

  const handleClick = (key: string) => {
    const updatedBoard = { ...board, [key]: currentPlayer };
    setBoard({ ...updatedBoard });
    setTurn(turn + 1);
    if (checkWinner(updatedBoard)) {
      return;
    }
    setCurrentPlayer(
      currentPlayer === player1Symbol ? player2Symbol : player1Symbol
    );
  };

  const checkWinner = (updatedBoard: Dictionary<string>) => {
    console.log(turn);
    if (turn === 9) {
      console.log("draw");
      handleEnd(0);
      return true;
    }

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[a] === updatedBoard[c] &&
        updatedBoard[a] !== ""
      ) {
        const winner = updatedBoard[a] === player1Symbol ? 1 : 2;
        setWinningCombo([a, b, c]);
        handleEnd(winner);
        resetBoard();
        return true;
      }
    }
    return false;
  };

  return (
    <div className="grid grid-cols-3  h-full bg-yellow-300 ">
      {Object.keys(board).map((key) => (
        <div
          key={key}
          className={`text-center align-middle  text-6xl border bg-slate-100 border-black h-20 ${
            board[key] === "" ? "hover:bg-red-900" : "bg-yellow-300"
          } delay-0 ${winningCombo.includes(key) ? "bg-green-500" : ""}`}
          onClick={() => {
            if (board[key] != "") {
              console.log("virkar ekki");
            } else {
              handleClick(key);
            }
          }}
        >
          <p className="animate-bounce">{board[key]}</p>
        </div>
      ))}
    </div>
  );
}
