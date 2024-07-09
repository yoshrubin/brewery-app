import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center bg-slate-400 p-8 shadow-md justify-between">
      <h1 className="text-2xl font-bold">🍺 BreweryDB</h1>
      <nav className="flex gap-4">
        <Link className="hover:underline" to="/">
          Browse
        </Link>
        <Link className="hover:underline" to="/favorites">
          Favorites
        </Link>
      </nav>
    </div>
  );
}
