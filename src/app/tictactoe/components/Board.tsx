export default function Board() {
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
