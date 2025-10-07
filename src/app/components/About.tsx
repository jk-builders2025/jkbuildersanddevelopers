"use client";
import React, { useState } from "react";
import { Building2, Clock, Award, Package, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// 🧱 Features
const features = [
  {
    icon: <Building2 className="w-8 h-8 text-[#C01920]" />,
    title: "Experienced",
    desc: "With decades of expertise in the construction industry, we bring a wealth of experience.",
  },
  {
    icon: <Package className="w-8 h-8 text-[#C01920]" />,
    title: "Competitive Price",
    desc: "We understand the importance of delivering top-notch construction services.",
  },
  {
    icon: <Clock className="w-8 h-8 text-[#C01920]" />,
    title: "On Time Service",
    desc: "We prioritize punctuality and efficiency in every project we undertake.",
  },
  {
    icon: <Award className="w-8 h-8 text-[#C01920]" />,
    title: "Best Materials",
    desc: "We prioritize quality in construction, using only the finest materials.",
  },
];

// 🏗️ Example Project Lists
const previousProjects = [
  "JK Residency - Krishnagiri",
  "Royal Enclave Villas - Hosur",
  "Sunshine Apartments - Salem",
  "Elite Tower - Chennai",
  "Emerald Business Park - Vellore",
  "Hillside Premium Homes - Dharmapuri",
  "Golden Leaf Commercial Complex - Coimbatore",
];

const ongoingProjects = [
  "JK Grand Hotel - Krishnagiri",
  "Skyline Apartments - Hosur",
  "Signature Villas - Salem",
  "Ocean View Resort - ECR Chennai",
  "Eco Smart Township - Madurai",
  "Urban Heights - Trichy",
];

const AboutSection = () => {
  const [activeModal, setActiveModal] = useState<"previous" | "ongoing" | null>(
    null
  );

  return (
    <section className="w-full py-20 bg-gray-50 relative">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features Of Dream
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our vision meets exceptional craftsmanship. Discover a new standard
            in home living with our commitment to quality construction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* About Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/hero3.jpg"
              alt="About JK Builders"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Award Winning Construction Company in Tamil Nadu
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              A distinguished and award-winning construction company proudly
              situated in the heart of Tamil Nadu. With a legacy of excellence,
              we have garnered recognition for our innovative approach,
              exceptional craftsmanship, and commitment to client satisfaction.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6">
              <div
                onClick={() => setActiveModal("previous")}
                className="cursor-pointer text-center bg-white rounded-xl p-4 shadow hover:shadow-lg hover:bg-[#C01920]/10 transition-all"
              >
                <p className="text-3xl font-extrabold text-[#C01920]">75+</p>
                <p className="text-sm text-gray-700">Previous Projects</p>
              </div>

              <div className="text-center bg-white rounded-xl p-4 shadow">
                <p className="text-3xl font-extrabold text-[#C01920]">10y+</p>
                <p className="text-sm text-gray-700">Years Experience</p>
              </div>

              <div
                onClick={() => setActiveModal("ongoing")}
                className="cursor-pointer text-center bg-white rounded-xl p-4 shadow hover:shadow-lg hover:bg-[#C01920]/10 transition-all"
              >
                <p className="text-3xl font-extrabold text-[#C01920]">25+</p>
                <p className="text-sm text-gray-700">Ongoing Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✨ Popup Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl w-[90%] md:w-[600px] max-h-[80vh] overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900">
                  {activeModal === "previous"
                    ? "Previous Projects"
                    : "Ongoing Projects"}
                </h4>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <ul className="space-y-4">
                  {(activeModal === "previous"
                    ? previousProjects
                    : ongoingProjects
                  ).map((project, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-4 rounded-xl bg-gray-50 hover:bg-[#C01920]/10 transition"
                    >
                      <span className="text-gray-800 font-medium">
                        {project}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
