import React from 'react';
import "../globals.css"
const Header = () => {
  return (
    <header className="bg-black mt-10 mt-opacity border-b-2 border-t-2 bg-opacity-50 border-red-600 text-center py-4">
      <nav className="flex justify-center items-center space-x-6">
        <a href="#home" className="text-white font-bold hover:text-gray-300">HOME</a>
        <a href="#guppys" className="text-white font-bold hover:text-gray-300">GUPPYS</a>
        <a href="#pleco" className="text-white font-bold hover:text-gray-300">PLECO</a>
        <a href="#darkys" className="text-white font-bold text-lg italic hover:text-red-600">DARKY'S</a>
        <a href="#betta" className="text-white font-bold hover:text-gray-300">BETTA</a>
        <a href="#alimento" className="text-white font-bold hover:text-gray-300">ALIMENTO</a>
        <a href="#nosotros" className="text-white font-bold hover:text-gray-300">NOSOTROS</a>
      </nav>
    </header>
  );
};

export default Header;
