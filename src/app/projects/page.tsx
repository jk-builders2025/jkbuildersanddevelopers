"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    name: "Sobha Heartland II Villas",
    desc: "Luxury 4-bedroom villas with premium finishes in Al Barsha.",
    status: "Completed",
    type: "Residential",
    img: "/hero3.jpg",
  },
  {
    id: 2,
    name: "Mykonos Damac Lagoons",
    desc: "Modern apartments with lagoon views in Palm Jumeirah.",
    status: "Ongoing",
    type: "Residential",
    img: "/hero1.jpg",
  },
  {
    id: 3,
    name: "Verdana 2 Residence",
    desc: "High-rise apartments designed for modern urban living in Dubai Marina.",
    status: "Completed",
    type: "Residential",
    img: "/hero2.jpg",
  },
  {
    id: 4,
    name: "JK Skyline Towers",
    desc: "Iconic 3BHK apartments in Downtown Dubai with skyline views.",
    status: "Ongoing",
    type: "Commercial",
    img: "/hero4.jpg",
  },
  {
    id: 5,
    name: "Palm Beach Villas",
    desc: "Exclusive beachfront villas with private pools and gardens.",
    status: "Completed",
    type: "Residential",
    img: "/hero5.jpg",
  },
];

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
      {/* Projects Section */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Showcase
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Recent Projects
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition">
                {/* Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-[260px]">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{project.desc}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="text-sm font-semibold text-[#C01920]">
                        {project.status}
                      </p>
                      <p className="text-sm text-gray-500">{project.type}</p>
                    </div>
                    <a
                      href="/contact"
                      className="px-4 py-2 bg-[#C01920] text-white text-sm rounded-full hover:bg-[#a3161a] transition"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Footer />
    </>
  );
};

export default ProjectsPage;
