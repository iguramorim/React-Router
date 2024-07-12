import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="mt-2 flex justify-center gap-5">
      <Link
        to="/"
        className="bg-blue-500 text-white px-3 py-1 hover:bg-blue-400 focus:bg-blue-800"
      >
        Home
      </Link>

      <Link
        to="/contact"
        className="bg-blue-500 text-white px-3 py-1 hover:bg-blue-400 focus:bg-blue-800"
      >
        contact
      </Link>
    </nav>
  );
}
