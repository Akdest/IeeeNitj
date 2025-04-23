"use client";

import React, { useState, useEffect } from "react";
import { Montserrat as MontserratFont } from "next/font/google";
import { Michroma as MichromaFont } from "next/font/google";
import { StaticImageData } from "next/image";

import image1 from "/public/image1.jpeg";
import image2 from "/public/image2.jpeg";
import image3 from "/public/image3.jpeg";
import image4 from "/public/image4.jpeg";

const Montserrat = MontserratFont({ weight: ["400"], subsets: ["latin"] });
const michroma = MichromaFont({ weight: ["400"], subsets: ["latin"] });

const textStyling = {
  color: "#1F41BB",
};

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => (
  <div
    className={`${michroma.className} text-center text-[1.8rem] sm:text-[2.2rem] font-bold pb-4`}
    style={{
      WebkitTextStrokeWidth: 1,
      WebkitTextStrokeColor: "#8A92DD",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      color: "black",
    }}
  >
    {text.split(" ").slice(0, -1).join(" ")}{" "}
    <span style={{ color: "#004E92" }}>{text.split(" ").slice(-1)}</span>
  </div>
);

const images: StaticImageData[] = [image1, image2, image3, image4];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getImageIndex = (offset: number): number =>
    (currentIndex + offset + images.length) % images.length;

  return (
    <div className="w-full px-4 sm:px-10 md:py-12 py-8 flex flex-col items-center justify-center">
      <Heading text="GALLERY SECTION" />

      <div className="w-full flex items-center justify-center max-w-7xl gap-2 sm:gap-6">
        <button onClick={prevSlide} className="p-1 sm:p-2 hover:scale-110 transition">
          <img src="/left_arrow.png" alt="Left" className="w-6 sm:w-8" />
        </button>

        <div className="flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out">
          <div
            className="hidden md:block w-24 h-36 sm:w-28 sm:h-40 lg:w-32 lg:h-48 rounded-xl bg-cover bg-center opacity-50 blur-sm"
            style={{
              backgroundImage: `url(${images[getImageIndex(-1)].src})`,
            }}
          />
          <div
            className="h-[320px] w-[80vw] sm:h-[400px] md:w-[70vw] md:h-[520px] mx-2 sm:mx-4 rounded-3xl bg-cover bg-center shadow-xl transition duration-700"
            style={{
              backgroundImage: `url(${images[getImageIndex(0)].src})`,
            }}
          />
          <div
            className="hidden md:block w-24 h-36 sm:w-28 sm:h-40 lg:w-32 lg:h-48 rounded-xl bg-cover bg-center opacity-50 blur-sm"
            style={{
              backgroundImage: `url(${images[getImageIndex(1)].src})`,
            }}
          />
        </div>

        <button onClick={nextSlide} className="p-1 sm:p-2 hover:scale-110 transition">
          <img src="/right_arrow.png" alt="Right" className="w-6 sm:w-8" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
