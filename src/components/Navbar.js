// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { SiAnki } from "react-icons/si";

const Navbar = () => {
  return (
    <>
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

    {/* Hero Section */}
    <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/bg.avif')" }}>
    <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-white text-5xl font-bold mb-4">Welcome to Food-Zone</h1>
      <p className="text-gray-300 text-xl mb-6">Experience the finest dishes in town</p>
      <a href="#menu" className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-600">View Menu</a>
    </div>
  </header>

  </>
  );
}

export default Navbar;
