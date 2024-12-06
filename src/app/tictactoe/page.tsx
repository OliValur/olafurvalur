"use client";
import { useState } from "react";

export default function TicTacToePage() {
  interface Dictionary<T> {
    [key: string]: T;
  }

  //player interface
  //   interface Player {
  //     name: string;
  //     score: number;
  //     symbol: string;
  //   }
  //   const [players, setPlayers] = useState<Player[]>([
  //     { name: "Player 1", score: 0, symbol: "X" },
  //     { name: "Player 2", score: 0, symbol: "O" },
  //   ]);
  const [board, setBoard] = useState<Dictionary<string>>({
    a1: "",
    a2: "",
    a3: "",
    b1: "",
    b2: "",
    b3: "",
    c1: "",
    c2: "",
    c3: "",
  });

  const handleClick = (key: string) => {
    setBoard({ ...board, [key]: "X" });
  };

  return (
    <div className="grid grid-cols-3 gap-1 h-full bg-yellow-300 text-center">
      {Object.keys(board).map((key) => (
        <div
          key={key}
          className={`border bg-slate-100 border-black h-20 ${
            board[key] === "" ? "hover:bg-red-900" : "bg-yellow-300"
          } delay-0`}
          onClick={() => {
            if (board[key] != "") {
              console.log("virkar ekki");
            } else {
              handleClick(key);
            }
          }}
        >
          {board[key]}
        </div>
      ))}
    </div>
  );
}
