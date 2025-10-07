"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Globe2, Building2, Palette } from "lucide-react";

const UniqueSection = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Floating Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#C0192033,_transparent_70%)]"></div>

      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/hero1.jpg"
              alt="World-class hotel designs"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Sparkles */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-6 -right-6 bg-[#C01920] text-white p-5 rounded-full shadow-xl"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* RIGHT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C01920] uppercase tracking-wide font-semibold mb-2">
            Innovation Beyond Borders
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why <span className="text-[#C01920]">JK Builders & Developers</span>{" "}
            Are Unique
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <strong>JK Builders and Developers</strong>, we bring a
            revolutionary approach to modern construction. By importing
            <strong> exclusive architectural designs from China</strong> and
            assembling them locally, we ensure each project stands as a symbol
            of global excellence and craftsmanship. Every design blends
            international innovation with local precision.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We specialize in <strong>premium hotel architecture</strong> that
            breaks traditional design boundaries. Our creations embody luxury,
            style, and sustainability — giving clients not just a building, but
            a <strong>world-class experience</strong> that defines
            sophistication and elegance.
          </p>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
            {[
              {
                icon: Globe2,
                text: "Imported Chinese Designs",
              },
              {
                icon: Building2,
                text: "Hotel Design Specialists",
              },
              {
                icon: Palette,
                text: "World-Class Aesthetics",
              },
              {
                icon: Sparkles,
                text: "Exclusive, Non-Regular Designs",
              },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white shadow-md p-4 rounded-xl border-l-4 border-[#C01920] hover:shadow-lg transition"
              >
                <Icon className="text-[#C01920] w-6 h-6" />
                <span className="text-gray-800 font-medium">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C01920] via-orange-500 to-[#C01920] origin-left"
      />
    </section>
  );
};

export default UniqueSection;
