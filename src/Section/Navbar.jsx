// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-14 py-4 flex justify-between items-center shadow-md">
      <NavLink to="/" className="text-xl font-bold">Ashia Sultana</NavLink>
      <div className="flex gap-6 text-md">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-gray-300 transition ${
              isActive ? 'text-white' : 'text-gray-400'
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `hover:text-gray-300 transition ${
              isActive ? 'text-white' : 'text-gray-400'
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive }) =>
            `hover:text-gray-300 transition ${
              isActive ? 'text-white' : 'text-gray-400'
            }`
          }
        >
          Articles
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-gray-300 transition ${
              isActive ? 'text-white' : 'text-gray-400'
            }`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
