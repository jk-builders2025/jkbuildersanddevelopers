"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappIcon";
import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";
import Image from "next/image";
import AboutSection from "../components/About";

export default function AboutPage() {
  const founder = {
    name: "Kavi Arasu",
    title: "Founder & Managing Director",
    image: "/founder.jpg",
    desc: "Kavi Arasu, the visionary behind JK Builders & Developers, is an IIT Kanpur certified professional, Nakshatra Award recipient, and a proud BNI member. His leadership combines innovation, precision, and passion for excellence in construction and design.",
  };

  const DesignTeamMembers = [
    {
      name: "Haripriya",
      role: "Interior Designer",
      image: "/design/haripriya.jpeg",
    },
    { name: "Florance", role: "Architect", image: "/design/florance.png" },
    {
      name: "Dhanalakshmi",
      role: "Interior Designer",
      image: "/design/dhanalakshmi.jpg",
    },
  ];

  const CivilTeamMembers = [
    {
      name: "Poovarasan",
      role: "Site Engineer",
      image: "/site/poovarasan.jpg",
    },
    {
      name: "Babil Nathan",
      role: "Site Engineer",
      image: "/site/babilnathan.jpg",
    },
    { name: "Prasana", role: "Site Engineer", image: "/site/prasana.png" },
    { name: "Balaji", role: "Site Engineer", image: "/site/balaji.jpeg" },
  ];

  const milestones = [
    {
      year: "2017 – The Beginning in Krishnagiri",
      text: "JK Builders and Developers was founded in Krishnagiri, marking the start of journey in the residential construction sector. With a vision to deliver quality homes built on trust, innovation, innovation, and craftsmanship, we laid the foundation for a legacy of excellence.",
    },
    {
      year: "2019 – Expanding Horizons",
      text: "Ventured into premium projects, including luxury villas and farmhouses, integrating China-imported products to enhance design and quality standards",
    },
    {
      year: "2020 – Diversifying Expertise",
      text: "Expanded operations to include industrial and commercial projects, marking a new milestone in our professional growth and versatility",
    },
    {
      year: "2023 – Redefining Design Excellence",
      text: "Introduced a complete design-to-end service model, offering clients a seamless experience from concept to completion. Opened our second branch in Hosur, strengthening our regional presence and client reach",
    },
    {
      year: "2024 – Entering the Hospitality Sector",
      text: "Ventured into hospitality and lifestyle projects, including hotels, jewellery showrooms, hospitals, and premium villas, reflecting our design innovation and construction excellence.",
    },
    {
      year: "2025 – Global Expansion & Brand Launch",
      text: "Transformed our Head Office into a Corporate Headquarters, symbolizing our evolution into a nextlevel enterprise. Launched an advanced Design Studio in China, taking our creative capabilities global. Introduced our own brand – ESTAGO, specializing in kitchenware, sanitary ware, furniture, lighting,and home décor. Through ESTAGO, we expanded into the global market, engaging in the import and export of all commodities while providing quality service and exceptional value.",
    },
  ];

  return (
    <>
      <NavBar />

      {/* ✅ HERO */}
      <section className="relative w-full bg-gradient-to-r from-[#C01920] via-[#EA9C88] to-[#6F6765] text-white py-20 md:py-28 text-center px-4 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-4 leading-tight"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2"
        >
          Building trust, innovation, and excellence — one project at a time.
        </motion.p>
      </section>

      {/* ✅ VIDEO SECTION */}
      <section className="relative w-full h-[60vh] sm:h-[80vh] overflow-hidden">
        <video
          src="/awards-ceremony.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3"
          >
            Recognition & Awards
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-sm sm:text-base md:text-lg text-gray-200"
          >
            Celebrating milestones and honors that reflect our commitment to
            quality and excellence.
          </motion.p>
        </div>
      </section>

      {/* ✅ MISSION & VISION */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900">
            Our Mission & Vision
          </h2>
          <div className="grid gap-8 md:grid-cols-2 text-left">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl border-t-4 border-[#C01920]">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#C01920] mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To create sustainable, high-quality spaces that inspire trust
                and add value to every project we undertake.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl border-t-4 border-[#EA9C88]">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#C01920] mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To be recognized as a trusted leader in architecture, interiors,
                and construction solutions across the region.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ✅ FOUNDER */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-white to-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#C01920]">
              {founder.name}
            </h2>
            <p className="text-gray-700 font-medium mb-3 text-base sm:text-lg">
              {founder.title}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-5 text-sm text-gray-700">
              <span className="flex items-center gap-2">
                <Award size={18} className="text-[#C01920]" /> Nakshatra Award
              </span>
              <span className="flex items-center gap-2">
                <Users size={18} className="text-[#C01920]" /> BNI Member
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {founder.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ✅ TEAM SECTIONS */}
      <section className="py-16 px-4 sm:px-6 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          Design & Architecture Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {DesignTeamMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-md group"
            >
              <Image
                src={m.image}
                alt={m.name}
                width={500}
                height={600}
                className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end text-white p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold">{m.name}</h3>
                <p className="text-sm text-[#EA9C88]">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-gray-50 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          Site Engineering Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {CivilTeamMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-md group"
            >
              <Image
                src={m.image}
                alt={m.name}
                width={500}
                height={600}
                className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end text-white p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold">{m.name}</h3>
                <p className="text-sm text-[#EA9C88]">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ TIMELINE */}
      <section className="py-20 px-4 sm:px-6 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          Our Journey
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-[#C01920] h-full transform -translate-x-1/2"></div>
          <div className="space-y-12 sm:space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 p-5 sm:p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-md`}
                >
                  <h4 className="text-lg sm:text-xl font-bold text-[#C01920] mb-1">
                    {m.year}
                  </h4>
                  <p className="text-gray-700 text-sm sm:text-base">{m.text}</p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-[#C01920] shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      {/* ✅ CTA */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-[#C01920] via-[#EA9C88] to-[#6F6765] text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4"
        >
          Let’s Build Your Dream Project
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg"
        >
          Partner with JK Builders for innovative, reliable, and high-quality
          construction services.
        </motion.p>
        <a
          href="/contact"
          className="px-8 py-3 sm:px-10 sm:py-4 bg-white text-[#C01920] font-semibold rounded-full shadow-xl hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
        >
          Contact Us
        </a>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="919876543210" />
    </>
  );
}
