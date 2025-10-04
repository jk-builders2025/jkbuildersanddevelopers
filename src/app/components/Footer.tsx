import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / Logo */}
        <div>
          <div className="flex items-center space-x-3">
            <Image
              src="/jk-logo.jpg"
              alt="JK Builders & Developers Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Building dreams with trust and quality. Delivering modern
            infrastructure with innovation and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-[#C01920] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#C01920] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#C01920] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#C01920] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              📍 SF No 181/1A5B1, Sri Balaji Towers, Bangalore Highway,
              Krishnagiri, Tamil Nadu 635002
            </li>
            <li>📞 +91 98403 64084</li>
            <li>✉️ jkbuildersanddevelopers@gmail.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-xl">
            <a
              href="https://www.facebook.com/share/1BHxJiD116/?mibextid=wwXIfr"
              className="hover:text-blue-500 transition"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400 transition"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/jk_builders_and_developers?igsh=dm9xMW44azlwZnd0&utm_source=qr"
              className="hover:text-pink-500 transition"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-blue-600 transition"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} JK Builders & Developers. All rights
          reserved.
        </p>
        <p className="mt-2">
          Developed by{" "}
          <a
            href="https://growbranz.com"
            target="_blank"
            className="text-[#C01920] hover:underline"
          >
            Grow Branz
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
