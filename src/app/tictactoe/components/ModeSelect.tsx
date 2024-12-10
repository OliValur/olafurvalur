export default function ModeSelect({
  onSetGameSettings,
}: {
  onSetGameSettings: (
    mode: string,
    player1: string,
    player2: string,
    player1Symbol: string,
    player2Symbol: string
  ) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-xl font-bold">Choose Game Mode</h1>
      <button
        onClick={() =>
          onSetGameSettings("two-player", "Player 1", "Player 2", "X", "O")
        }
        className="btn"
      >
        Two Player Local
      </button>
      <button
        onClick={() =>
          onSetGameSettings("single-player", "Player", "AI", "X", "O")
        }
        className="btn"
      >
        Single Player (AI)
      </button>
      <button
        onClick={() =>
          onSetGameSettings("online", "Player 1", "Player 2", "X", "O")
        }
        className="btn"
      >
        Two Player Online
      </button>
    </div>
  );
}