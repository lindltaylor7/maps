import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white">Registro 2025</h1>
      </Link>

      <ul className="flex gap-x-2">
        <li>
          <Link to="/users" className="bg-indigo-500 px-4 py-1 rounded-sm">
            Usuarios
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
