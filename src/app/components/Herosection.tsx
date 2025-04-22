"use client";

import React, { useState, useEffect } from "react";
import { StaticImageData } from "next/image";

const image1 = "/image1.jpeg" as unknown as StaticImageData;
const image2 = "/image2.jpeg" as unknown as StaticImageData;
const image3 = "/image3.jpeg" as unknown as StaticImageData;
const image4 = "/image4.jpeg" as unknown as StaticImageData;

const images: StaticImageData[] = [image1, image2, image3, image4];

const Herosection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen"
      style={{
        backgroundImage: "url('/main.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-screen h-screen relative overflow-hidden">
          {/* Fade Images */}
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}

          {/* Overlay Text Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full p-4">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white drop-shadow-lg text-center">
              INSTITUTE OF ELECTRICAL AND
            </h1>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white drop-shadow-lg text-center">
              ELECTRONICS ENGINEERS
            </h1>
            <h1 className="text-lg md:text-2xl lg:text-4xl mt-4 md:mt-8 text-white drop-shadow-lg text-center font-semibold">
              STUDENT CHAPTER NIT JALANDHAR
            </h1>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
