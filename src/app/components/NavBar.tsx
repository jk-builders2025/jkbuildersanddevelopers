"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // for Next.js 13+

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // get current path

  // Helper to check if the link is active
  const isActive = (path: any) => pathname === path;

  return (
    <nav className="w-full sticky top-0 z-50 shadow-md bg-white px-6 md:px-12 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold bg-gradient-to-r from-[#C01920] via-[#6F6765] via-[#EA9C88] to-[#CD4C2F] bg-clip-text text-transparent">
        JK Builders And Developers
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li
          className={`cursor-pointer hover:text-[#C01920] ${
            isActive("/") ? "text-[#C01920]" : ""
          }`}
        >
          <a href="/">Home</a>
        </li>
        <li
          className={`cursor-pointer hover:text-[#C01920] ${
            isActive("/about") ? "text-[#C01920]" : ""
          }`}
        >
          <a href="/about">About us</a>
        </li>
        <li
          className={`cursor-pointer hover:text-[#C01920] ${
            isActive("/services") ? "text-[#C01920]" : ""
          }`}
        >
          <a href="/services">Services</a>
        </li>
        <li
          className={`cursor-pointer hover:text-[#C01920] ${
            isActive("/projects") ? "text-[#C01920]" : ""
          }`}
        >
          <a href="/projects">Projects</a>
        </li>
        <li
          className={`cursor-pointer hover:text-[#C01920] ${
            isActive("/contact") ? "text-[#C01920]" : ""
          }`}
        >
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-6">
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
          {[
            { name: "Home", path: "/" },
            { name: "About us", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`hover:text-[#C01920] ${
                isActive(link.path) ? "text-[#C01920]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="px-4 py-2 rounded-xl bg-[#C01920] text-white hover:bg-[#CD4C2F] transition">
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
