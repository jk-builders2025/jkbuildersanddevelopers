"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
interface Project {
  id: number;
  name: string;
  desc: string;
  images: string[];
}

// ✅ Define a type for apartment projects (optional but good practice)
interface ApartmentProject {
  id: number;
  name: string;
  desc: string;
  location: string;
  type: string;
  status: string;
  img: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Golden Park Hotel",
    desc: "A well-planned commercial complex located near New Bus Stand, Krishnagiri. Built with durable RCC foundation and quality materials, ensuring long-term structural safety.",
    images: [
      "/golden_park_hotel/1elevation.png",
      "/golden_park_hotel/elevation1.jpg",
      "/golden_park_hotel/elevation2.jpg",
      "/golden_park_hotel/elevation3.jpg",
      // "/golden_park_hotel/elevation4.jpg",
    ],
  },
  {
    id: 2,
    name: "Sri Vaasan",
    desc: "A residential project in Pochampalli, designed with practical layouts and high-quality finishes for lasting comfort.",
    images: [
      "/vasam_res.png",
      "/sri_vasam/vasam2.jpeg",
      "/sri_vasam/vasam3.jpeg",
      "/sri_vasam/vasam4.jpeg",
      "/sri_vasam/interior3.jpg",
      "/sri_vasam/elevation2.jpg",
    ],
  },
  {
    id: 3,
    name: "Harsha Residency",
    desc: "A residential complex in Gemini Estate, Krishnagiri, constructed with high-quality materials and efficient design layouts.",
    images: [
      "/haesha_residency/elevation1.jpeg",
      "/haesha_residency/elevation2.jpeg",
      "/haesha_residency/elevation3.jpeg",
    ],
  },
  {
    id: 4,
    name: "Elangovan Apartment",
    desc: "A residential apartment project located at Stadium Backside, Krishnagiri, with optimized living spaces and modern construction standards.",
    images: [
      "/elangovan/elevation.jpeg",
      "/elangovan/elevation2.jpeg",
      // "/elangovan/interior2.jpeg",
    ],
  },
  {
    id: 5,
    name: "Gopal House",
    desc: "A residential property in Housing Board, Krishnagiri, built with a focus on durability and comfortable living.",
    images: ["/gopal/elevation1.jpg", "/gopal/elevation2.jpg"],
  },
  {
    id: 6,
    name: "Chandru (Farmhouse)",
    desc: "A farmhouse located in Thabalmedu, Bargur, designed for serene living with practical layouts and quality construction.",
    images: [
      "/chandru_farmhouse/front.webp",
      "/chandru_farmhouse/elevation1.jpeg",
      "/chandru_farmhouse/elevation2.jpeg",
      "/chandru_farmhouse/elevation3.jpeg",
      "/chandru_farmhouse/elevation4.jpeg",
      "/chandru_farmhouse/elevation5.jpeg",
    ],
  },
  {
    id: 7,
    name: "Dr. Kumeresan",
    desc: "A residential project in Krishnagiri offering functional living spaces and high-standard construction materials.",
    images: ["/dr_kumeresan/1.jpeg", "/dr_kumeresan/2.jpeg"],
  },
  {
    id: 8,
    name: "Thuyamani (Farmhouse)",
    desc: "A farmhouse in Pochampalli, built with attention to durability and designed for comfortable rural living.",
    images: [
      "/thuyamani_farm/elevation1.jpg",
      "/thuyamani_farm/interior1.jpeg",
      "/thuyamani_farm/5.jpeg",
      "/thuyamani_farm/7.jpeg",
    ],
  },
  {
    id: 9,
    name: "Bala Subramaniam",
    desc: "A premium residential villa in Indra Nagar, Krishnagiri, designed with practical layouts and quality construction.",
    images: [
      "/balasubramani/interior1.jpg",
      "/balasubramani/1.jpg",
      // "/balasubramani/interior3.jpg",
    ],
  },
  {
    id: 10,
    name: "Elavarasan",
    desc: "A villa located on Kuppam Road, Krishnagiri, constructed with modern design principles and quality materials.",
    images: [
      "/elavarasan/out.png",
      "/elavarasan/elevation.png",
      // "/elavarasan/interior2.jpeg",
    ],
  },
  {
    id: 11,
    name: "Venkateshwara Jewellery",
    desc: "A commercial property in Hosur designed for retail and office use with functional spaces and quality finishes.",
    images: ["/svj/svj.webp"],
  },
];

const ApartmentProjects: ApartmentProject[] = [
  {
    id: 1,
    name: "Harsha Apartment",
    desc: "A residential apartment complex in Krishnagiri, designed for functional urban living with quality materials and modern layouts.",
    location: "Krishnagiri",
    type: "Apartment",
    status: "Completed",
    img: "/haesha_residency/elevation1.jpeg",
  },
  {
    id: 2,
    name: "Elangovan Apartment",
    desc: "A modern apartment located at Stadium Backside, Krishnagiri, featuring optimized layouts and durable construction materials.",
    location: "Stadium Backside, Krishnagiri",
    type: "Apartment",
    status: "Completed",
    img: "/elangovan/elevation.jpeg",
  },
  {
    id: 3,
    name: "Gopal Apartment",
    desc: "A residential apartment in Housing Board, Krishnagiri, designed with practical layouts and quality construction for comfortable living.",
    location: "Housing Board, Krishnagiri",
    type: "Apartment",
    status: "Completed",
    img: "/gopal/elevation1.jpg",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50 relative">
      {/* ======= Featured Projects ======= */}
      <div className="mb-12 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Featured Projects
        </h2>
      </div>

      {/* ======= Featured Projects Cards ======= */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div
              onClick={() => setActiveProject(project)}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white hover:-translate-y-1"
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.images[0]}
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
                  <p className="text-gray-600 mt-2 text-sm line-clamp-4">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ======= Featured Project Modal ======= */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              {/* Image Slider */}
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation
                loop
                className="rounded-t-3xl"
              >
                {activeProject.images.map((img: string, idx: number) => (
                  <SwiperSlide key={idx}>
                    <div className="relative w-full h-[300px] md:h-[450px]">
                      <Image
                        src={img}
                        alt={`${activeProject.name}-${idx}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Project Details */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {activeProject.name}
                </h3>
                <p className="text-gray-700 mb-4">{activeProject.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======= Apartment Projects ======= */}
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
