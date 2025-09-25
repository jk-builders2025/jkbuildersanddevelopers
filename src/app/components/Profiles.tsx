"use client";
import React from "react";
import Image from "next/image";

const team = [
  { id: 1, name: "Emma", role: "Architect", img: "/team/emma.jpg" },
  { id: 2, name: "Henry", role: "Civil Engineer", img: "/team/henry.jpg" },
  { id: 3, name: "John", role: "Project Manager", img: "/team/john.jpg" },
];

const TeamSection = () => {
  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          OUR <span className="text-yellow-400">CREATIVE TEAM</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-300 mb-12">
          At{" "}
          <span className="font-semibold text-yellow-400">
            JK Builders and Developers
          </span>
          , we believe in innovation, precision, and teamwork. Meet the
          brilliant minds building the future with us.
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              {/* Profile Image Circle */}
              <div
                className={`w-40 h-40 rounded-full flex items-center justify-center overflow-hidden shadow-lg ${
                  index === 0
                    ? "bg-pink-200"
                    : index === 1
                    ? "bg-gray-300"
                    : "bg-yellow-200"
                }`}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Name + Role */}
              <h3 className="mt-6 text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>

              {/* Description */}
              <p className="mt-3 text-xs text-gray-400 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                auctor, nisl vel tincidunt feugiat, nunc sapien ultricies quam.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
