"use client";

import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappIcon";
import ConsultationPopup from "../components/ConsultationPopup";
import Services from "../components/Services"; // ✅ using the Services component you made
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <>
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
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Delivering end-to-end construction and design solutions with quality,
          trust, and innovation.
        </motion.p>
      </section>

      {/* Services Timeline Section */}
      <Services />

      {/* Call To Action */}
      <section className="py-20 bg-gradient-to-r from-[#C01920] via-[#EA9C88] to-[#6F6765] text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Let’s Build Something Great Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 max-w-2xl mx-auto"
        >
          Whether it’s your dream home, a commercial space, or groundwork —
          we’ve got you covered under one roof.
        </motion.p>
        <a
          href="/contact"
          className="px-8 py-3 bg-white text-[#C01920] font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="919876543210" />
    </>
  );
}
