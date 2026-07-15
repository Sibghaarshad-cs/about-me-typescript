import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          🐙 GitHub Explorer
        </h1>

        <div className="flex gap-6">
          <Link
            to="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/favorites"
            className="hover:text-pink-400 transition duration-300"
          >
            ❤️ Favorites
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;