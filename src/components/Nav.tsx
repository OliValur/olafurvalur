import Link from "next/link";
export default function Nav() {
  return (
    <div className="flex bg-orange-400  items-center ">
      <div className="flex-1 basis-1/4 hover:bg-orange-700 text-left">
        <Link href="/">Home</Link>
      </div>
      <div className="flex-auto basis-2/4 hover:bg-orange-700 text-center">
        <h1>Ólafur Svalur</h1>
      </div>
      <div className="flex-auto basis-1/4 hover:bg-orange-700 text-right justify-centersjonva px-2">
        <Link href="/tictactoe">Tic Tac Toe</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
