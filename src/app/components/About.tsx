"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

// Direct JSON (example construction-themed Lottie, you can replace with another JSON snippet)
const aboutAnim = {
  v: "5.7.6",
  fr: 30,
  ip: 0,
  op: 120,
  w: 500,
  h: 500,
  nm: "construction animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Crane Arm",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: 0 },
            { t: 120, s: 360 },
          ],
        },
        p: { a: 0, k: [250, 250, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "rect",
          d: 1,
          s: { a: 0, k: [200, 20] },
          p: { a: 0, k: [0, 0] },
          r: { a: 0, k: 5 },
          nm: "Rectangle Path",
          hd: false,
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.75, 0.1, 0.1, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          bm: 0,
          nm: "Fill",
          hd: false,
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
      bm: 0,
    },
  ],
};

const About = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Lottie
            animationData={aboutAnim}
            loop={true}
            className="w-[80%] md:w-[90%]"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#C01920] mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At <span className="font-semibold">JK Builders</span>, we deliver
            complete A–Z building solutions – from architecture and interiors to
            civil works. With over a decade of expertise, we design and build
            spaces that combine innovation, functionality, and timeless
            aesthetics.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900">
                🏗️ Our Mission
              </h3>
              <p className="text-gray-600 mt-2">
                To create sustainable, high-quality spaces that inspire trust
                and add value to every project we undertake.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900">🌍 Our Vision</h3>
              <p className="text-gray-600 mt-2">
                To be recognized as a trusted leader in architecture, interiors,
                and construction solutions across the region.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
