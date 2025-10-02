"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    id: 1,
    name: "Sobha Heartland II Villas",
    desc: "4 Bedroom Villas for Rent in Al Barsha, Al Barsha 1",
    img: "/hero3.jpg",
  },
  {
    id: 2,
    name: "Mykonos Damac Lagoons",
    desc: "2 Bedroom Apartment in Bilqas Residence, Palm Jumeirah",
    img: "/hero1.jpg",
  },
  {
    id: 3,
    name: "Verdana 2 Residence",
    desc: "1 Bedroom Apartment in Continental Tower, Dubai Marina",
    img: "/hero2.jpg",
  },
  {
    id: 4,
    name: "JK Skyline Towers",
    desc: "Luxury 3BHK Apartments in Downtown Dubai with city views.",
    img: "/hero4.jpg",
  },
  {
    id: 5,
    name: "Palm Beach Villas",
    desc: "Exclusive beachfront villas with private pools and gardens.",
    img: "/hero5.jpg",
  },
];

const Projects = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50">
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Featured Projects
        </h2>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
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
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white">
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">{project.desc}</p>
                </div>

                {/* CTA Button */}
                <div className="mt-4">
                  <button className="px-5 py-2 bg-[#C01920] text-white rounded-full text-sm font-medium hover:bg-red-700 transition">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
