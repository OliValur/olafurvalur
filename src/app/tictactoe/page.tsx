"use client";
import { useState } from "react";
import Board from "./components/Board";
import ModeSelect from "./components/ModeSelect";
import PlayerInfo from "./components/PlayerInfo";

export default function TicTacToePage() {
  const [gameMode, setGameMode] = useState<string>("");
  const [player1Symbol, setPlayer1Symbol] = useState<string>("X");
  const [player2Symbol, setPlayer2Symbol] = useState<string>("O");
  const [player1Name, setPlayer1Name] = useState<string>("Player 1");
  const [player2Name, setPlayer2Name] = useState<string>("Player 2");
  const [player1Wins, setPlayer1Wins] = useState<number>(0);
  const [player2Wins, setPlayer2Wins] = useState<number>(0);
  const [draws, setDraws] = useState<number>(0);

  const setGameSettings = (
    mode: string,
    player1: string,
    player2: string,
    player1Symbol: string,
    player2Symbol: string
  ) => {
    setGameMode(mode);
    setPlayer1Name(player1);
    setPlayer2Name(player2);
    setPlayer1Symbol(player1Symbol);
    setPlayer2Symbol(player2Symbol);
  };

  if (gameMode === "") {
    return <ModeSelect onSelect={setGameSettings} />;
  }

  const handleEnd = (winner: number) => {
    if (winner === 1) {
      setPlayer1Wins(player1Wins + 1);
    } else if (winner === 2) {
      setPlayer2Wins(player2Wins + 1);
    } else {
      setDraws(draws + 1);
    }
  };
  return (
    <div>
      <div className="justify-center">
        <Board
          handleEnd={handleEnd}
          player1Symbol={player1Symbol}
          player2Symbol={player2Symbol}
        />
        <div className="flex flex-wrap justify-center gap-6">
          <PlayerInfo
            playerSymbol={player1Symbol}
            playerName={player1Name}
            playerWins={player1Wins}
          />
          <PlayerInfo
            playerSymbol={player2Symbol}
            playerName={player2Name}
            playerWins={player2Wins}
          />
        </div>
      </div>
    </div>
  );
}
