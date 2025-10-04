"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Residential Construction",
    desc: "Turn your dream home into reality with tailored designs, durable materials, and attention to every detail — so you can live comfortably for generations.",
    img: "/hero8.jpg",
  },
  {
    id: 2,
    title: "Commercial Builds & Remodeling",
    desc: "Boost your business with smart, functional, and stylish commercial spaces that impress clients, inspire employees, and maximize efficiency.",
    img: "/hero3.jpg",
  },
  {
    id: 3,
    title: "Excavation & Site Preparation",
    desc: "Lay a solid foundation for your project with precise excavation, land clearing, and grading services powered by advanced machinery and skilled operators.",
    img: "/hero2.jpg",
  },
  {
    id: 4,
    title: "Interior Design & Renovation",
    desc: "Transform interiors into modern, functional, and elegant spaces. From custom kitchens to luxury living rooms — we bring your vision to life.",
    img: "/hero1.jpg",
  },
  {
    id: 5,
    title: "Architectural Design & Planning",
    desc: "Build smarter with innovative, sustainable, and compliant designs by our expert architects — ensuring beauty meets functionality at every stage.",
    img: "/hero7.jpg",
  },
  {
    id: 6,
    title: "Roadworks & Infrastructure",
    desc: "From roads to large-scale infrastructure, our precision-driven approach ensures durability, safety, and long-term reliability for communities.",
    img: "/hero3.jpg",
  },
  {
    id: 7,
    title: "Maintenance & Facility Management",
    desc: "Keep your property in prime condition with our ongoing maintenance and facility management solutions — saving you time, stress, and money.",
    img: "/hero6.jpg",
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

        {/* Milestones / Timeline */}
        <section className="py-20 px-6 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Journey
            </h2>
            <p className="text-gray-600">
              From humble beginnings to trusted builders — here’s our story.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 w-1 bg-[#C01920] h-full transform -translate-x-1/2"></div>

            <div className="space-y-16">
              {[
                {
                  year: "2012",
                  text: "Founded JK Builders with a small but passionate team.",
                },
                {
                  year: "2015",
                  text: "Completed our first 100+ residential projects.",
                },
                {
                  year: "2018",
                  text: "Expanded into commercial construction and large-scale projects.",
                },
                {
                  year: "2022",
                  text: "Recognized as a trusted builder with sustainable practices.",
                },
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`relative flex md:items-center ${
                    i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`w-full md:w-1/2 p-6 rounded-2xl shadow-md bg-white border border-gray-100
              ${
                i % 2 === 0
                  ? "md:mr-auto md:text-right"
                  : "md:ml-auto md:text-left"
              }
              text-center md:text-inherit`}
                  >
                    <h4 className="text-xl font-bold text-[#C01920] mb-2">
                      {milestone.year}
                    </h4>
                    <p className="text-gray-700">{milestone.text}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#C01920] shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
