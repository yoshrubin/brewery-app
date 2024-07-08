import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-slate-400 p-8 shadow-md">
      <nav className="flex gap-4">
        <Link className="hover:underline" to="/">
          Browse
        </Link>
        <Link className="hover:underline " to="/favorites">
          Favorites
        </Link>
      </nav>
      <h1 className="text-2xl font-bold">BreweryDB</h1>
      <form className="flex gap-2">
        <input
          className="rounded-sm py-3 px-2"
          type="text"
          placeholder="Search"
        />
        <button className="bg-white p-3 rounded-md hover:invert" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
