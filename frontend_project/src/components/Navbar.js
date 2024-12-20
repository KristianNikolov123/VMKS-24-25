import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); 
  const isProductsPage = location.pathname === '/products'; 

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400 transition duration-300">
            My Project
          </Link>
        </div>
        <ul className="flex space-x-6">
          {isProductsPage ? (
            <>
              <li>
                <Link
                  to="/profile"
                  className="relative px-3 py-1 transition duration-300 hover:bg-gray-700 rounded"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="relative px-3 py-1 transition duration-300 hover:bg-gray-700 rounded"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="relative px-3 py-1 transition duration-300 hover:bg-gray-700 rounded"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/"
                  className="relative px-3 py-1 transition duration-300 hover:bg-gray-700 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="relative px-3 py-1 transition duration-300 hover:bg-gray-700 rounded"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/test"
                  className="relative px-3 py-1 transition duration-300 hover:bg-gray-700 rounded"
                >
                  Test
                </Link>
              </li>
              <li>
                <Link
                  to="/signIn"
                  className="relative px-3 py-1 transition duration-300 hover:bg-gray-700 rounded"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="relative px-3 py-1 transition duration-300 hover:bg-gray-700 rounded"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
