import Link from "next/link";
export default function Nav() {
  return (
    <div className="flex bg-slate-800 text-white  items-center h-16">
      <div className="flex-1 basis-1/4 text-left">
        <Link className="hover:font-bold" href="/">
          Home
        </Link>
      </div>
      <div className="flex-auto basis-2/4 text-center">
        <h1 className="text-xl font-bold">Ólafur Svalur</h1>
      </div>
      <div className="flex basis-1/4   px-2 gap-5">
        <Link className="hover:font-bold" href="/tictactoe">
          Tic Tac Toe
        </Link>
        <Link className="hover:font-bold" href="/ski">
          Skíði
        </Link>
        <Link className="hover:font-bold" href="/bormio">
          Bormio
        </Link>
      </div>
    </div>
  );
}
