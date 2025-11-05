"use client";
import React, { useState } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Before & After",
  "Residential",
  "Apartments",
  "Interiors",
];

const projects = [
  {
    id: 1,
    category: "Before & After",
    before: "/before.jpg",
    after: "/after.jpg",
    title: "Residential",
  },
  {
    id: 2,
    category: "Residential",
    img: "/elavarasan/elevation.png",
    title: "Elavarasan",
  },
  {
    id: 3,
    category: "Residential",
    img: "/chandru_farmhouse/elevation1.jpeg",
    title: "Chandru Farmhouse",
  },
  {
    id: 4,
    category: "Residential",
    img: "/dr_kumeresan/1.jpeg",
    title: "Dr. Kumeresan",
  },
  {
    id: 5,
    category: "Apartments",
    img: "/haesha_residency/elevation1.jpeg",
    title: "Haesha Residency",
  },
  {
    id: 6,
    category: "Interiors",
    img: "/thuyamani_farm/interior1.jpeg",
    title: "Thuyamani Farmhouse Interior",
  },
  {
    id: 7,
    category: "Interiors",
    img: "/balasubramani/interior1.jpg",
    title: "Balasubramani Interior",
  },
  {
    id: 8,
    category: "Apartments",
    img: "/elangovan/elevation.jpeg",
    title: "Elangovan Apartments",
  },
  {
    id: 9,
    category: "Residential",
    img: "/golden_park_hotel/1elevation.png",
    title: "Golden Park Residency",
  },
  {
    id: 10,
    category: "Apartments",
    img: "/gallery/Gopal_apartment.jpg",
    title: "Gopal Apartments",
  },
  {
    id: 11,
    category: "Residential",
    img: "/gallery/vanigar_sangam.jpg",
    title: "Vanigar Sangam",
  },
  {
    id: 12,
    category: "Residential",
    img: "/gallery/Vasavi_sky_lavilla.jpg",
    title: "Vasavi Sky Villa",
  },
  {
    id: 13,
    category: "Interiors",
    img: "/gallery/prem.jpg",
    title: "Prem",
  },
  {
    id: 14,
    category: "Residential",
    img: "/gallery/dharshadan.jpg",
    title: "Dhasaradhan house",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-[#C01920]">Gallery</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Take a look at some of our finest residential, commercial, and
          interior projects, including stunning before-and-after
          transformations.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[#C01920] text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 group"
          >
            {/* Before/After case */}
            {project.before && project.after ? (
              <div className="grid grid-cols-2 gap-1">
                <div className="relative w-full h-52">
                  <Image
                    src={project.before}
                    alt="Before"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Before
                  </span>
                </div>
                <div className="relative w-full h-52">
                  <Image
                    src={project.after}
                    alt="After"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute bottom-2 left-2 bg-[#16A34A]/90 text-white text-xs px-2 py-1 rounded">
                    After
                  </span>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={project.img!}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
            )}

            {/* Title */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#C01920] transition">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
