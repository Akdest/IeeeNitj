"use client";

import React, { useState, useEffect } from "react";
import { Michroma } from "next/font/google";
import { StaticImageData } from "next/image";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });

import image1 from "/public/image1.jpeg";
import image2 from "/public/image2.jpeg";
import image3 from "/public/image3.jpeg";
import image4 from "/public/image4.jpeg";

const images: StaticImageData[] = [image1, image2, image3, image4];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getImageIndex = (offset: number): number =>
    (currentIndex + offset + images.length) % images.length;

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#e0f4ff] to-[#c9d6ff] flex flex-col justify-center items-center overflow-hidden px-4">
      <h1
        className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center text-[#001f3f] ${michroma.className}`}
        style={{ textShadow: "0 2px 6px rgba(0,0,0,0.2)" }}
      >
        GALLERY SECTION
      </h1>

      <div className="flex items-center justify-center w-full max-w-6xl">
        {/* Left Arrow */}
        <button onClick={prevSlide} className="p-1 md:p-2 hover:scale-105 transition">
          <img src="/left_arrow.png" alt="Left" className="w-6 md:w-8" />
        </button>

        {/* Carousel Images */}
        <div className="flex items-center justify-center space-x-2 md:space-x-6 transition duration-700">
          {/* Previous Image (blurred on md+) */}
          <div
            className="hidden md:block w-32 h-48 rounded-xl bg-cover bg-center opacity-50 blur-sm"
            style={{ backgroundImage: `url(${images[getImageIndex(-1)].src})` }}
          />

          {/* Current Image */}
          <div
            className="w-[300px] h-[400px] md:w-[520px] md:h-[520px] rounded-3xl bg-cover bg-center shadow-2xl transition duration-500"
            style={{
              backgroundImage: `url(${images[getImageIndex(0)].src})`,
            }}
          />

          {/* Next Image (blurred on md+) */}
          <div
            className="hidden md:block w-32 h-48 rounded-xl bg-cover bg-center opacity-50 blur-sm"
            style={{ backgroundImage: `url(${images[getImageIndex(1)].src})` }}
          />
        </div>

        {/* Right Arrow */}
        <button onClick={nextSlide} className="p-1 md:p-2 hover:scale-105 transition">
          <img src="/right_arrow.png" alt="Right" className="w-6 md:w-8" />
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="flex space-x-2 mt-4 md:mt-6">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
              idx === currentIndex ? "bg-[#001f3f]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
