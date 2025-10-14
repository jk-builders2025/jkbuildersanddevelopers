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
    name: "Metro Bazzar",
    desc: "Spacious 4 Bedroom Villas located in the heart of Al Barsha, offering modern amenities and elegant design.",
    img: "/hero3.jpg",
  },
  {
    id: 2,
    name: "Sri Vasam",
    desc: "2 Bedroom Apartment in Bilqas Residence, Palm Jumeirah, featuring contemporary interiors and premium finishes.",
    img: "/sri_vasam/elevation1.jpg",
  },
  {
    id: 3,
    name: "Chandru Farmhouse",
    desc: "1 Bedroom Apartment in Continental Tower, Marina, designed for luxury living with stunning city views.",
    img: "/chandru_farmhouse/elevation1.jpeg",
  },
  {
    id: 4,
    name: "Dr. Kumeresan",
    desc: "Luxury 3BHK Apartments in Downtown Tamil Nadu, offering modern layouts, spacious living, and scenic city vistas.",
    img: "/dr_kumeresan/1.jpeg",
  },
  {
    id: 5,
    name: "Thuyamani",
    desc: "Beachfront villa with private pools, lush gardens, and elegant interiors designed for ultimate comfort.",
    img: "/thuyamani_farm/interior1.jpeg",
  },
  {
    id: 6,
    name: "Elavarasan",
    desc: "Exclusive villa with modern architecture, spacious interiors, and luxurious outdoor spaces.",
    img: "/elavarasan/elevation.png",
  },
  {
    id: 7,
    name: "Bala Subramani",
    desc: "Beautiful villa with premium interiors, private garden, and serene surroundings for peaceful living.",
    img: "/balasubramani/interior1.jpg",
  },
];

// Only apartments
const ApartmentProjects = [
  {
    id: 1,
    name: "Haesha Apartments",
    desc: "Elegant 4 Bedroom Apartments in Al Barsha, designed for modern urban living with high-quality finishes.",
    img: "/haesha_residency/elevation1.jpeg",
  },
  {
    id: 2,
    name: "Elangovan Apartments",
    desc: "Stylish 2 Bedroom Apartments in Bilqas Residence, Palm Jumeirah, featuring contemporary layouts and premium amenities.",
    img: "/elangovan/elevation.jpeg",
  },
  {
    id: 3,
    name: "Gopalan Apartments",
    desc: "Cozy 1 Bedroom Apartments in Continental Tower, Marina, offering smart design and scenic city views.",
    img: "/haesha_residency/elevation3.jpeg",
  },
];

const Projects = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50">
      {/* Featured Projects */}
      <div className="mb-12 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Featured Projects
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
              <div className="relative w-full h-64">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">{project.desc}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Apartment Projects Section */}
      <div className="mt-20 mb-12 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Apartment Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Our Apartments
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop
      >
        {ApartmentProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white">
              <div className="relative w-full h-64">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">{project.desc}</p>
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
