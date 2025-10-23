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
    desc: "A well-planned commercial complex located near New Bus Stand, Krishnagiri. Built with durable RCC foundation and quality materials, ensuring long-term structural safety.",
    location: "Near New Bus Stand, Krishnagiri",
    type: "Commercial",
    status: "Completed",
    img: "/metro/elevation.png",
  },
  {
    id: 2,
    name: "Sri Vaasan",
    desc: "A residential project in Pochampalli, designed with practical layouts and high-quality finishes for lasting comfort.",
    location: "Pochampalli",
    type: "Residential",
    status: "Completed",
    img: "/sri_vasam/elevation1.jpg",
  },
  {
    id: 3,
    name: "Harsha Residency",
    desc: "A residential complex in Gemini Estate, Krishnagiri, constructed with high-quality materials and efficient design layouts.",
    location: "Gemini Estate, Krishnagiri",
    type: "Residential",
    status: "Completed",
    img: "/haesha_residency/elevation1.jpeg",
  },
  {
    id: 4,
    name: "Elangovan Apartment",
    desc: "A residential apartment project located at Stadium Backside, Krishnagiri, with optimized living spaces and modern construction standards.",
    location: "Stadium Backside, Krishnagiri",
    type: "Apartment",
    status: "Completed",
    img: "/elangovan/elevation.jpeg",
  },
  {
    id: 5,
    name: "Gopal House",
    desc: "A residential property in Housing Board, Krishnagiri, built with a focus on durability and comfortable living.",
    location: "Housing Board, Krishnagiri",
    type: "Residential",
    status: "Completed",
    img: "/haesha_residency/elevation3.jpeg",
  },
  {
    id: 6,
    name: "Chandru (Farmhouse)",
    desc: "A farmhouse located in Thabalmedu, Bargur, designed for serene living with practical layouts and quality construction.",
    location: "Thabalmedu, Bargur",
    type: "Farmhouse",
    status: "Completed",
    img: "/chandru_farmhouse/elevation1.jpeg",
  },
  {
    id: 7,
    name: "Dr. Kumeresan",
    desc: "A residential project in Krishnagiri offering functional living spaces and high-standard construction materials.",
    location: "Krishnagiri",
    type: "Residential",
    status: "Completed",
    img: "/dr_kumeresan/1.jpeg",
  },
  {
    id: 8,
    name: "Thuyamani (Farmhouse)",
    desc: "A farmhouse in Pochampalli, built with attention to durability and designed for comfortable rural living.",
    location: "Pochampalli",
    type: "Farmhouse",
    status: "Completed",
    img: "/thuyamani_farm/interior1.jpeg",
  },
  {
    id: 9,
    name: "Bala Subramaniam",
    desc: "A premium residential villa in Indra Nagar, Krishnagiri, designed with practical layouts and quality construction.",
    location: "Indra Nagar, Krishnagiri",
    type: "Residential",
    status: "Completed",
    img: "/balasubramani/interior1.jpg",
  },
  {
    id: 10,
    name: "Elavarasan",
    desc: "A villa located on Kuppam Road, Krishnagiri, constructed with modern design principles and quality materials.",
    location: "Kuppam Road, Krishnagiri",
    type: "Residential",
    status: "Completed",
    img: "/elavarasan/elevation.png",
  },
  {
    id: 11,
    name: "Venkateshwara Jewellery",
    desc: "A commercial property in Hosur designed for retail and office use with functional spaces and quality finishes.",
    location: "Hosur",
    type: "Commercial",
    status: "Completed",
    img: "/svj/svj.webp",
  },
  {
    id: 12,
    name: "Dr. Elambarathi",
    desc: "A residential project located at Utangarai Road, Mattur, built with attention to structural stability and efficient design.",
    location: "Utangarai Road, Mattur",
    type: "Residential",
    status: "Completed",
    img: "/elambarathi/elevation1.jpeg",
  },
];

// ===================== Apartment Projects =====================
const ApartmentProjects = [
  {
    id: 1,
    name: "Haesha Apartments",
    desc: "A residential apartment complex in Krishnagiri, designed for functional urban living with quality materials and modern layouts.",
    location: "Krishnagiri",
    type: "Apartment",
    status: "Completed",
    img: "/haesha_residency/elevation1.jpeg",
  },
  {
    id: 2,
    name: "Elangovan Apartments",
    desc: "A modern apartment located at Stadium Backside, Krishnagiri, featuring optimized layouts and durable construction materials.",
    location: "Stadium Backside, Krishnagiri",
    type: "Apartment",
    status: "Completed",
    img: "/elangovan/elevation.jpeg",
  },
  {
    id: 3,
    name: "Gopalan Apartments",
    desc: "A residential apartment in Housing Board, Krishnagiri, designed with practical layouts and quality construction for comfortable living.",
    location: "Housing Board, Krishnagiri",
    type: "Apartment",
    status: "Completed",
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
