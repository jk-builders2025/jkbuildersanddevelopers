"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Architectural Design & Planning",
    desc: "Build smarter with innovative, sustainable, and compliant designs by our expert architects — ensuring beauty meets functionality at every stage.",
    img: "/hero6.jpg",
  },
  {
    id: 2,
    title: "Residential Construction",
    desc: "Turn your dream home into reality with tailored designs, durable materials, and attention to every detail — so you can live comfortably for generations.",
    img: "/vasam_res.png",
  },
  {
    id: 3,
    title: "Commercial Builds",
    desc: "Boost your business with smart, functional, and stylish commercial spaces that impress clients, inspire employees, and maximize efficiency.",
    img: "/commercial.jpg",
  },
  {
    id: 4,
    title: "Hospitality",
    desc: "Keep your property in prime condition with our ongoing maintenance and facility management solutions — saving you time, stress, and money.",
    img: "/hero8.jpg",
  },
  {
    id: 5,
    title: "Interior Design & Renovation",
    desc: "Transform interiors into modern, functional, and elegant spaces. From custom kitchens to luxury living rooms — we bring your vision to life..",
    img: "/3.6.jpg",
  },
  {
    id: 6,
    title: "Roadworks & Infrastructure",
    desc: "From roads to large-scale infrastructure, our precision-driven approach ensures durability, safety, and long-term reliability for communities.",
    img: "/road.jpg",
  },
  {
    id: 7,
    title: "Maintenance & Facility Management",
    desc: "Keep your property in prime condition with our ongoing maintenance and facility management solutions — saving you time, stress, and money.",
    img: "/maintance.jpg",
  },
];

// ✅ Define variants as a function of `custom`
const cardVariants: Variants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section className="w-full py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
            The Wide Range Of Services <br />
            <span className="text-[#C01920]">Under One Roof</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At JK Builders, we provide complete solutions — from planning and
            design to construction and long-term care — ensuring every project
            is built with trust, innovation, and excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line Animation */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-[#C01920] to-[#CD4C2F] transform -translate-x-1/2 rounded-full"
          ></motion.div>

          <div className="space-y-20 relative">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                custom={index % 2 === 0 ? "left" : "right"}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className={`flex flex-col md:flex-row items-center gap-6 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Connector Dot with Pulse */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [1.2, 1], opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    repeat: 1,
                    repeatType: "reverse",
                  }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#C01920] bg-white shadow-lg z-10"
                ></motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                  }}
                  className="bg-white text-black rounded-xl shadow-md p-6 w-full md:w-1/2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* CTA Button */}
                  <a
                    href="/contact"
                    className="inline-block px-5 py-2 bg-[#C01920] text-white font-medium rounded-lg shadow hover:bg-[#a3161a] transition"
                  >
                    Get a Free Consultation
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
