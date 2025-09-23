"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white px-6 md:px-12 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold bg-gradient-to-r from-[#C01920] via-[#6F6765] via-[#EA9C88] to-[#CD4C2F] bg-clip-text text-transparent">
        JK Builders And Developers
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li className="hover:text-[#C01920] cursor-pointer">Home</li>
        <li className="hover:text-[#C01920] cursor-pointer">About us</li>
        <li className="hover:text-[#C01920] cursor-pointer">Services</li>
        <li className="hover:text-[#C01920] cursor-pointer">Projects</li>
        <li className="hover:text-[#C01920] cursor-pointer">Contact us</li>
      </ul>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-6">
        {/* <button className="text-gray-600 hover:text-[#C01920]">🔍</button> */}
        <button className="px-4 py-2 rounded-xl bg-[#C01920] text-white hover:bg-[#CD4C2F] transition">
          Contact us
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
          <a
            href="#"
            className="hover:text-[#C01920]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-[#C01920]"
            onClick={() => setIsOpen(false)}
          >
            About us
          </a>
          <a
            href="#"
            className="hover:text-[#C01920]"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-[#C01920]"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#"
            className="hover:text-[#C01920]"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </a>
          <button className="px-4 py-2 rounded-xl bg-[#C01920] text-white hover:bg-[#CD4C2F] transition">
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
