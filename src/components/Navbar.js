// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { SiAnki } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
       <SiAnki  className="text-white font-bold text-lg w-[40px] h-[30px] " />
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
          </li>
          <li>
            <Link to="/signUp" className="text-white hover:text-gray-300">Sign Up</Link>
          </li>
          <li>
            <Link to="/counter" className="text-white hover:text-gray-300">Counter</Link>
          </li>
          <li>
            <Link to="/fatchApi" className="text-white hover:text-gray-300">Fatch-Api</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
