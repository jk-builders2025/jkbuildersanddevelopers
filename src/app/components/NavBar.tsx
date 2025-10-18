"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full sticky top-0 z-50 shadow-md bg-white px-6 md:px-12 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/jk-logo.jpg"
            alt="JK Logo"
            width={150}
            height={50}
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        {[
          { name: "Home", path: "/" },
          { name: "About us", path: "/about" },
          { name: "Services", path: "/services" },
          { name: "Projects", path: "/projects" },
          { name: "Gallery", path: "/gallery" },
        ].map((link) => (
          <li
            key={link.name}
            className={`cursor-pointer hover:text-[#C01920] ${
              isActive(link.path) ? "text-[#C01920]" : ""
            }`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          href="/contact"
          className="px-4 py-2 rounded-xl bg-[#C01920] text-white hover:bg-[#A8151B] transition"
        >
          Contact us
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-6 py-6 font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About us", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Projects", path: "/projects" },
            { name: "Gallery", path: "/gallery" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${
                isActive(link.path) ? "text-[#C01920]" : "text-black"
              } hover:text-[#C01920] transition`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl bg-[#C01920] text-white hover:bg-[#A8151B] transition"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
