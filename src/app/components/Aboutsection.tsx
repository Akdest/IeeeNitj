"use client";
import React from "react";
import { Montserrat as MontserratFont } from "next/font/google";

const Montserrat = MontserratFont({ weight: ["400"], subsets: ["latin"] });
const textStyling = {
  color: "#1F41BB",
};

const Aboutsection = () => {
  return (
    <div className="flex justify-center">
      <div className="h-[100%] rounded-[20px] md:rounded-[40px] text-black grid-rows-4 p-7 w-[90%]">
        <div className="relative top-5 w-[90%] rounded-full flex justify-center shadow-md h-[120px] items-center row-span-2 mx-auto">
          <h2
            className={`text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${Montserrat.className} font-extrabold`}
          >
            ABOUT US
          </h2>
        </div>

        {/* About Content */}
        <div className="flex flex-col gap-10 px-4 py-14">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2
                className={`text-black text-xl sm:text-4xl mb-4 ${Montserrat.className} font-extrabold`}
              >
                ABOUT IEEE
              </h2>
              <p className="text-black text-lg w-[90%]">
                The IEEE Student Chapter at NIT Jalandhar is a dynamic community
                of tech enthusiasts, innovators, and leaders committed to
                fostering professional growth, technical excellence, and
                impactful contributions to society.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              <div className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33] cursor-pointer">
                Over <span style={textStyling}>460,000</span> members in more
                than <span style={textStyling}>190</span> countries.
              </div>
              <div className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33] cursor-pointer">
                IEEE was formed in <span style={textStyling}>1963</span>
              </div>
              <div className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33] cursor-pointer">
                <span style={textStyling}>300</span> conferences each year
              </div>
              <div className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33] cursor-pointer">
                <span style={textStyling}>344</span> sections,{" "}
                <span style={textStyling}>2,709</span> chapters,
                <span style={textStyling}>3,635</span> student branches
              </div>
            </div>
          </div>

          {/* About NITJ + Image */}
          <div className="flex flex-col-reverse lg:flex-row gap-32 items-center">
            <div
              className="w-full sm:w-[400px] md:w-[510px] h-[200px] sm:h-[300px] lg:h-[312px] rounded-[40px] drop-shadow-md"
              style={{
                backgroundImage: "url('/nitj.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex-1">
              <h1
                className={`text-black text-xl sm:text-4xl mb-4 ${Montserrat.className}`}
              >
                ABOUT NITJ
              </h1>
              <p className="text-black text-lg w-[90%]">
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
    </div>
  );
};

export default Aboutsection;
