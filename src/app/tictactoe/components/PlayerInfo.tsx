import React, { useState } from "react";

export default function PlayerInfo({
  playerSymbol,
  playerWins,
  playerName,
}: {
  playerSymbol: string;
  playerWins: number;
  playerName: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl font-bold">{playerName}</div>
      <div className="text-xl">{playerSymbol}</div>
      <div className="text-xl">Wins: {playerWins}</div>
    </div>
  );
}
