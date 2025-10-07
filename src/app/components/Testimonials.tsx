"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Yokash Yok",
    text: "The best construction and architectural firm in Krishnagiri. They are young, dynamic, and innovative in designing buildings as per client requirements while maintaining aesthetics. Highly recommended for large-scale projects as well.",
    img: "/testimonials/user1.png",
  },
  {
    id: 2,
    name: "Vinish JKV",
    text: "A builder with a reputation for being transparent and customer-friendly. JK Builders ensures quality is never compromised, with dedicated teams for each department. They value long-term relationships over transactions — highly trustworthy!",
    img: "/testimonials/user2.png",
    highlight: true,
  },
  {
    id: 3,
    name: "Anitha CEO",
    text: "I’m highly impressed with the professionalism and quality of work. From consultation to completion, the team demonstrated exceptional skill, efficiency, and attention to detail. Truly reliable professionals.",
    img: "/testimonials/user3.png",
  },
  {
    id: 4,
    name: "Kathir Basha",
    text: "JK Builders is very trustworthy. Their designs are unique, they maintain punctuality, and their finishing work is perfect. I’m completely satisfied with their work.",
    img: "/testimonials/user4.png",
  },
  {
    id: 5,
    name: "Vinoth Kumar",
    text: "Quality and client satisfaction are their top priorities. Friendly engineers, strong technical knowledge, and excellent execution. They truly are the best in town!",
    img: "/testimonials/user6.png",
  },
  {
    id: 6,
    name: "Hari Prasad",
    text: "If you’re looking for trendy, stylish, yet cost-effective construction and interiors, JK Builders is the one to trust. Highly recommended for modern home design.",
    img: "/testimonials/user5.png",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            What Our <br className="hidden md:block" /> Customers Say
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            We take pride in building relationships that last. Here’s what some
            of our happy clients have to say about their experience with JK
            Builders and Developers.
          </p>
        </div>

        {/* RIGHT CONTENT - Animated Testimonials */}
        <div className="relative flex items-center justify-center h-auto min-h-[280px] sm:min-h-[260px] md:h-52 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg relative ${
                testimonials[index].highlight
                  ? "border-l-4 border-l-[#C01920]"
                  : "border border-gray-100"
              }`}
            >
              {/* Avatar */}
              <div className="w-16 h-16 sm:w-14 sm:h-14 rounded-full overflow-hidden relative flex-shrink-0">
                <Image
                  src={testimonials[index].img}
                  alt={testimonials[index].name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {testimonials[index].name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {testimonials[index].text}
                </p>
              </div>

              {/* Quote Icon */}
              <Quote
                size={22}
                className={`absolute top-5 right-5 ${
                  testimonials[index].highlight
                    ? "text-[#C01920]"
                    : "text-gray-300"
                }`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Doodle */}
      <div className="absolute -top-6 right-10 w-16 h-16 sm:w-20 sm:h-20 opacity-30">
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
