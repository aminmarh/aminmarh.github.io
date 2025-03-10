import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'À propos', href: '/about' },
    // { name: 'Taxe d\'Apprentissage', href: '/taxe' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Événements', href: '/events' },
    { name: 'Ressources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                className="w-auto h-12"
                src="https://math-info.u-paris.fr/wp-content/uploads/sites/8/2022/03/UniversiteParisCite_Mathe%E2%95%A0%C3%BCmatiques-et-informatique.jpg"
                alt="Apprentis'Cité"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-3 py-2 text-sm font-medium transition-colors duration-200 text-paris-dark hover:text-paris-red"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/verser"
              className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-md bg-paris-red hover:bg-red-700"
            >
              Verser ma taxe
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-paris-dark hover:text-paris-red focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-base font-medium text-paris-dark hover:text-paris-red"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/verser"
              className="block w-full px-4 py-2 mt-4 text-base font-medium text-center text-white rounded-md bg-paris-red hover:bg-red-700"
              onClick={() => setIsOpen(false)}
            >
              Verser ma taxe
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;