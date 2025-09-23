"use client";
import React from "react";
import { motion } from "framer-motion";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
  "/hero7.jpg",
  "/hero8.jpg",
  "/hero9.jpg",
];

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center px-6 md:px-12 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#C01920]">
            Complete A–Z Building Solutions
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-gray-700 max-w-md">
            Design, Build, Deliver — Trusted Architecture, Interiors & Civil
            Works
          </p>

          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-semibold rounded-lg shadow">
              ISO Certified
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-semibold rounded-lg shadow">
              10+ Years Experience
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-semibold rounded-lg shadow">
              100+ Projects Delivered
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <button className="px-8 py-4 bg-[#C01920] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#A8151B] transition text-lg">
              Request a Quote
            </button>
          </div>
        </motion.div>

        {/* Right Content - Seamless Masonry Auto-Scrolling Grid */}
        <div className="overflow-hidden h-[500px] rounded-xl shadow-xl">
          <motion.div
            animate={{ y: ["0%", "-50%"] }} // only scroll half since we duplicated images
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="grid grid-cols-2 gap-3"
          >
            {[...images, ...images].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`project-${i}`}
                className="w-full h-[240px] object-cover rounded-lg"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
