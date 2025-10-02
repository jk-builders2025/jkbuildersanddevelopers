"use client";

import React from "react";
import NavBar from "../components/NavBar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappIcon";
import { motion } from "framer-motion";

const GalleryPage = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#C01920] via-[#EA9C88] to-[#6F6765] text-white py-28 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Our Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Explore our residential, commercial, and interior projects —
          showcasing the quality, trust, and creativity that define JK Builders.
        </motion.p>
      </section>

      {/* Gallery Section */}
      <Gallery />

      <Footer />
      <WhatsAppButton phoneNumber="9840364084" />
    </div>
  );
};

export default GalleryPage;
'0.  '