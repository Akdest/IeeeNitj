"use client";

import React, { useState, useEffect } from "react";
import { StaticImageData } from "next/image";

const image1 = "/event-1.png" as unknown as StaticImageData;
const image2 = "/event-2.png" as unknown as StaticImageData;
const image3 = "/event-3.png" as unknown as StaticImageData;
const image4 = "/event-4.png" as unknown as StaticImageData;

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
          {/* Fade Images (z-0) */}
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentIndex === index ? "opacity-100 z-0" : "opacity-0 z-0"
              }`}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}

          {/* Blackish Overlay between image and text (z-10) */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Text Content (z-20) */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
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
        </div>
      </div>
    </div>
  );
};

export default Herosection;
