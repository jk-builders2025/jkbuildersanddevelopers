"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "yokash yok",
    text: "The best construction and architectural firm in krishnagiri . They are young dynamic and innovative in designing the buildings as per clients requirements and keeping in mind the aesthetics. Highly recommended for large scale projects also ",
    img: "/testimonials/user1.png",
  },
  {
    id: 2,
    name: "vinish jkv",
    text: "A builder with a reputation for being transparent and customer friendly, they have a dedicated team for every department to ensure that quality is uncompromised. For JK builders, it’s not merely a contract or sale but a relation, in which they ensure that they address any issue we may face at any point of time. I would definitely recommendJK builders and developers to all property buyers and the builder you can trust.",
    img: "/testimonials/user2.png",
    highlight: true,
  },
  {
    id: 3,
    name: "Anitha Ceo",
    text: "I am highly impressed with the professionalism and quality of work provided by this building company. From the initial consultation to the completion of the project, their team demonstrated exceptional skill, efficiency, and attention to detail",
    img: "/testimonials/user3.png",
  },
  {
    id: 4,
    name: "kathir basha",
    text: "JK Builders is very trustful workers their designs are unqie and they maintain their punctuality their work finishing is perfect i'm statisfied their work",
    img: "/testimonials/user4.png",
  },
  {
    id: 5,
    name: "Vinoth Kumar",
    text: "Quality and Client satisfaction is their main priority, friendly Engineer and their team. I am really satisfied on how they finished my home. They are also technical strong. They are best in the town and highly recommend",
    img: "/testimonials/user6.png",
  },
  {
    id: 6,
    name: "Hari Prasad",
    text: "If you are in need of unique,Trendy & Stylish house but at the same time cost effective Construction and interiors you can trust JK builders. Highly recommended",
    img: "/testimonials/user5.png",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our <br /> Customers Says
          </h2>
          <p className="text-gray-500 mb-6 max-w-md">
            Relation so in confined smallest children unpacked delicate. Why sir
            end believe uncivil respect. Always get adieus nature day course for
            common.
          </p>
          {/* <button className="px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-purple-500 to-orange-500 hover:opacity-90 transition">
            View More
          </button> */}
        </div>

        {/* Right - Animated Testimonials */}
        <div className="relative h-48 flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex items-start gap-4 bg-white shadow-md rounded-xl p-5 w-full relative ${
                testimonials[index].highlight
                  ? "border-l-4 border-l-purple-500"
                  : "border border-gray-100"
              }`}
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full overflow-hidden relative flex-shrink-0">
                <Image
                  src={testimonials[index].img}
                  alt={testimonials[index].name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {testimonials[index].name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {testimonials[index].text}
                </p>
              </div>

              {/* Quote Icon */}
              <Quote
                size={20}
                className={`absolute top-4 right-4 ${
                  testimonials[index].highlight
                    ? "text-purple-500"
                    : "text-gray-300"
                }`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Doodle */}
      <div className="absolute -top-6 right-10 w-20 h-20">
        <Image
          src="/decor/star-doodle.svg"
          alt="decorative doodle"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Testimonials;
