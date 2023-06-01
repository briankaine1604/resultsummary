import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-200">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Logo</h1>
        </div>
        <div className="sm:hidden">
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            onClick={toggleNavbar}
          >
            {/* Button content */}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex flex-col sm:flex-row sm:items-center sm:justify-center mt-2 sm:mt-0`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="#"
            className="mt-2 sm:mt-0 px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#"
            className="mt-2 sm:mt-0 px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            About
          </a>
          <div className="relative group">
            <a
              href="#"
              className="mt-2 sm:mt-0 px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Content
            </a>
            <div
              className={`absolute bg-white w-48 py-2 px-4 border border-gray-200 rounded shadow-md mt-2 ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              {/* Submenu content */}
              <a
                href="#"
                className="block py-1 text-gray-700 hover:text-gray-900"
              >
                Submenu Item 1
              </a>
              <a
                href="#"
                className="block py-1 text-gray-700 hover:text-gray-900"
              >
                Submenu Item 2
              </a>
            </div>
          </div>
          <a
            href="#"
            className="mt-2 sm:mt-0 px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Help
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
