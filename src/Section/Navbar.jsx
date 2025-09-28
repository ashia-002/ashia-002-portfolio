// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-6 md:px-14 py-4 flex justify-between items-center shadow-md relative z-50">
      {/* Logo */}
      <NavLink to="/" className="text-lg md:text-xl font-bold">
        Ashia Sultana
      </NavLink>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 text-md">
        <NavLinks />
      </div>

      {/* Hamburger Icon for Mobile */}
      <button className="md:hidden z-50" onClick={() => setIsOpen(true)}>
        <Menu className="w-6 h-6" />
      </button>

      {/* AnimatePresence for exit animations */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-In Menu */}
            <motion.div
              className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-black z-50 flex flex-col items-start px-8 py-10 gap-10 text-lg shadow-lg"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <button onClick={() => setIsOpen(false)} className="self-end mb-4">
                <X className="w-6 h-6" />
              </button>
              <NavLinks onClick={() => setIsOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Navigation Links
function NavLinks({ onClick }) {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={onClick}
          className={({ isActive }) =>
            `hover:text-gray-300 transition ${
              isActive ? 'text-white' : 'text-gray-400'
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
}

