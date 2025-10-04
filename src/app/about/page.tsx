"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappIcon";
import { motion } from "framer-motion";
import AboutSection from "../components/About";
import { Activity, Zap, Handshake } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    {
      year: "2012",
      text: "Founded JK Builders with a small but passionate team.",
    },
    { year: "2015", text: "Completed our first 100+ residential projects." },
    {
      year: "2018",
      text: "Expanded into commercial construction and large-scale projects.",
    },
    {
      year: "2022",
      text: "Recognized as a trusted builder with sustainable practices.",
    },
  ];

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
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Building trust, innovation, and excellence — one project at a time.
        </motion.p>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At <span className="font-semibold text-[#C01920]">JK Builders</span>
            , we’ve been delivering A–Z construction solutions for over a
            decade. From residential villas to large-scale commercial projects,
            our commitment is simple:{" "}
            <span className="font-semibold">
              quality, sustainability, and customer satisfaction
            </span>
            .
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Our Mission",
              text: "To create sustainable, high-quality spaces that inspire trust and add value to every project we undertake.",
            },
            {
              title: "Our Vision",
              text: "To be recognized as a trusted leader in architecture, interiors, and construction solutions across the region.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100 backdrop-blur-md hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#C01920]">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <AboutSection />

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

        <div className="relative max-w-5xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 w-1 bg-[#C01920] h-full transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-full md:w-1/2 p-6 rounded-2xl shadow-md bg-white border border-gray-100 ${
                    i % 2 === 0 ? "mr-auto text-right" : "ml-auto text-left"
                  } text-center md:text-inherit`}
                >
                  <h4 className="text-xl font-bold text-[#C01920] mb-2">
                    {milestone.year}
                  </h4>
                  <p className="text-gray-700">{milestone.text}</p>
                </div>

                {/* Dot - visible only on md+ */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#C01920] shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We go beyond construction — we design experiences, build trust, and
            deliver value.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Expertise",
              text: "Decades of hands-on experience in residential, commercial, and civil projects.",
              icon: <Activity size={28} className="text-[#C01920]" />,
            },
            {
              title: "Innovation",
              text: "Modern design, cutting-edge techniques, and sustainable practices.",
              icon: <Zap size={28} className="text-[#C01920]" />,
            },
            {
              title: "Reliability",
              text: "On-time delivery, transparent processes, and long-term client relationships.",
              icon: <Handshake size={28} className="text-[#C01920]" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition"
            >
              {/* Icon */}
              <div className="mb-4">{item.icon}</div>

              {/* Title */}
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-gradient-to-r from-[#C01920] via-[#EA9C88] to-[#6F6765] text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Let’s Build Your Dream Project
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 max-w-2xl mx-auto"
        >
          Partner with JK Builders for innovative, reliable, and high-quality
          construction services.
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
