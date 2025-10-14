"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const ProjectsPage = () => {
  return (
    <>
      <NavBar /> {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#C01920] via-[#EA9C88] to-[#6F6765] text-white py-28 text-center overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Our Projects
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          From luxury villas to high-rise towers — discover some of our proudest
          achievements across Dubai.
        </p>
      </section>
      <Projects />
      <Footer />
    </>
  );
};

export default ProjectsPage;
