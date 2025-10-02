"use client";
import React from "react";
import { Building2, Clock, Award, Package } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Building2 className="w-8 h-8 text-[#C01920]" />,
    title: "Experienced",
    desc: "With decades of expertise in the construction industry, we bring a wealth of experience.",
  },
  {
    icon: <Package className="w-8 h-8 text-[#C01920]" />,
    title: "Competitive Price",
    desc: "We understand the importance of delivering top-notch construction services.",
  },
  {
    icon: <Clock className="w-8 h-8 text-[#C01920]" />,
    title: "On Time Service",
    desc: "We prioritize punctuality and efficiency in every project we undertake.",
  },
  {
    icon: <Award className="w-8 h-8 text-[#C01920]" />,
    title: "Best Materials",
    desc: "We prioritize quality in construction, using only the finest materials.",
  },
];

const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features Of Dream
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our vision meets exceptional craftsmanship. Discover a new standard
            in home living with our commitment to quality construction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* About Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/hero3.jpg" // replace with your own image
              alt="About JK Builders"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Award Winning Construction Company in Tamil Nadu
            </h3>
            <p className="text-gray-700 mb-8">
              A distinguished and award-winning construction company proudly
              situated in the heart of Tamil Nadu. With a legacy of excellence,
              we have garnered recognition for our innovative approach.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-extrabold text-[#C01920]">75+</p>
                <p className="text-sm text-gray-600">Previous Projects</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#C01920]">10y+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#C01920]">25+</p>
                <p className="text-sm text-gray-600">Ongoing Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
