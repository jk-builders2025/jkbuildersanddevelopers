"use client";
import React, { useState } from "react";
import { Building2, Clock, Award, Package, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

const previousProjects = [
  "METROBAZAR - NEAR NEW BUS STAND, KRISHNAGIRI",
  "SRI VAASAN - POCHAMPALLI",
  "SURIYA HOTEL - NEAR GOVERNMENT COLLEGE, KRISHNAGIRI",
  "HARSHA RESIDENCY - GEMINI ESTATE, KRISHNAGIRI",
  "ELANGOVAN APARTMENT - STADIUM BACKSIDE, KRISHNAGIRI",
  "GOPAL - HOUSING BOARD, KRISHNAGIRI",
  "CHANDRU (FARMHOUSE) - THABALMEDU, BARGUR",
  "DR. KUMARESAN - KRISHNAGIRI",
  "THUYAMANI (FARMHOUSE) - POCHAMPALLI",
  "BALASUBRAMANIUM - INDRA NAGAR, KRISHNAGIRI",
  "ELLAVARASAN - KUPPAM ROAD, KRISHNAGIRI",
  "VENKATESHWARA JEWELLERY - HOSUR",
  "DR. PARTHIBAN - NEAR NEW BUS STAND, KRISHNAGIRI",
  "DR. ELAMBARATHI - UTANGARAI ROAD, MATTUR",
];
const ongoingProjects = [
  "GOPAL - HOUSING BOARD, KRISHNAGIRI",
  "KAVITA - POCHAMPALLI",
  "SUDHAKAR - NEAR TAMILNADU HOTEL, KRISHNAGIRI",
  "DR. PARTHIBAN - NEAR NEW BUS STAND, KRISHNAGIRI",
  "ELANGOVAN APPARTMENT - STADIUM BACKSIDE, KRISHNAGIRI",
];

const AboutSection = () => {
  const [activeModal, setActiveModal] = useState<"previous" | "ongoing" | null>(
    null
  );

  return (
    <section className="w-full py-20 bg-gray-50 relative">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
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

        {/* About Company Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/hero3.jpg"
              alt="About JK Builders"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              At JK Builders and Developers, quality is our foundation and
              excellence is our promise.
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We use only premium-quality materials with absolutely no
              compromise. From approvals and planning to 2D and 3D designs,
              interior and exterior concepts, MEP drawings, and full
              construction solutions—we handle everything from scratch to
              completion.
            </p>

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

      {/* Modal */}
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
                <h4 className="text-2xl font-bold">
                  {activeModal === "previous"
                    ? "Previous Projects"
                    : "Ongoing Projects"}
                </h4>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <X className="w-5 h-5" />
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
                      className="p-4 bg-gray-50 rounded-xl hover:bg-[#C01920]/10 transition"
                    >
                      {project}
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
