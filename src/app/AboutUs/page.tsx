"use client";
import React from "react";
import NavigationBar from "../components/Navigation";
import { Michroma } from "next/font/google";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });
const textStyling = { color: "#1F41BB" };

export default function About() {
  return (
    <>
      <NavigationBar />
      <div className="w-full min-h-screen bg-gradient-to-tl from-[#DDEEFF] to-[#B8D1F3] py-10">
        <div className="w-[90%] max-w-7xl mx-auto flex flex-col gap-20">
          {/* Header */}
          <div className="flex justify-center">
            <h2
              className={`text-4xl sm:text-5xl font-extrabold text-center ${michroma.className} text-black`}
              style={{
                WebkitTextStrokeWidth: 1,
                WebkitTextStrokeColor: "#8A92DD",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              ABOUT US
            </h2>
          </div>

          {/* ABOUT IEEE SECTION */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Text */}
            <div className="flex-1">
              <h2
                className={`text-2xl sm:text-3xl font-bold mb-4 text-black ${michroma.className}`}
              >
                ABOUT IEEE
              </h2>
              <p className="text-lg text-black mb-8">
                The IEEE Student Chapter at NIT Jalandhar is a dynamic community
                of tech enthusiasts, innovators, and leaders committed to
                fostering professional growth, technical excellence, and impactful
                contributions to society.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33]">
                  Over <span style={textStyling}>460,000</span> members in{" "}
                  <span style={textStyling}>190+</span> countries.
                </div>
                <div className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33]">
                  IEEE was formed in <span style={textStyling}>1963</span>
                </div>
                <div className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33]">
                  Hosts <span style={textStyling}>300+</span> conferences/year
                </div>
                <div className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33]">
                  <span style={textStyling}>344</span> sections,{" "}
                  <span style={textStyling}>2,709</span> chapters,{" "}
                  <span style={textStyling}>3,635</span> student branches
                </div>
              </div>
            </div>

            {/* IEEE Image */}
            <div
              className="w-full sm:w-[400px] md:w-[500px] h-[250px] sm:h-[300px] lg:h-[350px] rounded-3xl shadow-md transform transition-all duration-500 hover:scale-105"
              style={{
                backgroundImage: "url('/event-1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          {/* ABOUT NITJ SECTION */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* NITJ Image */}
            <div
              className="w-full sm:w-[400px] md:w-[500px] h-[250px] sm:h-[300px] lg:h-[350px] rounded-3xl shadow-md transform transition-all duration-500 hover:scale-105"
              style={{
                backgroundImage: "url('/nitj.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Text */}
            <div className="flex-1">
              <h2
                className={`text-2xl sm:text-3xl font-bold mb-4 text-black ${michroma.className}`}
              >
                ABOUT NITJ
              </h2>
              <p className="text-lg text-black">
                Dr B R Ambedkar National Institute of Technology was established
                in 1987 as Regional Engineering College and was given the status
                of National Institute of Technology (Deemed University) by the
                Government of India on October 17, 2002 under the aegis of the
                Ministry of Education (Shiksha Mantralaya), New Delhi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
