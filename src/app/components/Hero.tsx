"use client";

import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";

const images = [
  "/haesha_residency/elevation2.jpeg",
  "/elavarasan/elevation.png",
  "/dr_kumeresan/1.jpeg",
  "/balasubramani/1.jpg",
  "/thuyamani_farm/7.jpeg",
  "/golden_park_hotel/1elevation.png", // this need to be change
  "/hero7.jpg", //this need to be change
  "/hero8.jpg",
  "/hero9.jpg",
];

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

interface HeroProps {
  openPopup: () => void;
}

const Hero: React.FC<HeroProps> = ({ openPopup }) => {
  // ✅ useRef prevents duplicate timers on re-renders
  const popupTriggered = useRef(false);

  useEffect(() => {
    if (popupTriggered.current) return; // prevent multiple runs
    popupTriggered.current = true;

    const timeouts: NodeJS.Timeout[] = [];

    // Schedule popups at 10 s, 40 s, and 80 s
    const timings = [10000, 40000, 80000];

    timings.forEach((delay) => {
      const t = setTimeout(() => openPopup(), delay);
      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [openPopup]);

  return (
    <section className="relative w-full h-auto md:h-[100vh] flex items-center justify-center px-6 md:px-12 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl items-center relative z-10">
        {/* ---------- Left Content ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center text-left pt-20 md:pt-0"
        >
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-[#C01920]">
            Complete A–Z Building Solutions
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-medium text-gray-700 max-w-md">
            Design, Build, Deliver — Trusted Architecture, Interiors & Civil
            Works
          </p>

          {/* ---------- Trust Badges ---------- */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-semibold rounded-lg shadow">
              BNI Member
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-semibold rounded-lg shadow">
              10+ Years Experience
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-semibold rounded-lg shadow">
              100+ Projects Delivered
            </span>
          </div>

          {/* ---------- CTA Button ---------- */}
          <div className="mt-8">
            <button
              onClick={openPopup}
              className="px-8 py-4 bg-[#C01920] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#A8151B] transition text-lg"
            >
              Request a Quote
            </button>
          </div>
        </motion.div>

        {/* ---------- Right Content (Image Animation) ---------- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="overflow-hidden h-[400px] md:h-[500px] rounded-xl shadow-xl"
        >
          <motion.div
            className="grid grid-cols-2 gap-3"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          >
            {[...images, ...images].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`project-${i}`}
                className="w-full h-[180px] md:h-[240px] object-cover rounded-lg"
                variants={imageVariants}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- Optional Background Overlay ---------- */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#FDF4F4] opacity-70 pointer-events-none" />
    </section>
  );
};

export default Hero;
