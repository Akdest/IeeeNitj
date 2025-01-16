"use client";

import React, { useState, useEffect } from "react";
import { Michroma } from "next/font/google";
import { StaticImageData } from "next/image";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });

const image1 = "/image1.jpeg" as unknown as StaticImageData;
const image2 = "/image2.jpeg" as unknown as StaticImageData;
const image3 = "/image3.jpeg" as unknown as StaticImageData;
const image4 = "/image4.jpeg" as unknown as StaticImageData;

const images: StaticImageData[] = [image1, image2, image3, image4];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (offset: number) => {
    setCurrentIndex((currentIndex + offset + images.length) % images.length);
  };

  const getImageIndex = (offset: number): number => {
    return (currentIndex + offset + images.length) % images.length;
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#E7F2F8] to-[#B7D5F3]">
      <div className="absolute top-6 sm:top-16 right-4 left-4 sm:right-12 sm:left-12 bottom-4 sm:bottom-9 border-2 sm:border-4 border-[#99B6D9] rounded-3xl md:rounded-[50px] flex items-center justify-center">
        <div className="absolute h-full w-full flex flex-col items-center px-4 md:px-8">
          <h1
            className={`absolute top-16 sm:top-12 lg:top-7 text-center text-4xl ${michroma.className}`}
            style={{ textShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)", fontWeight: "700" }}
          >
            GALLERY SECTION
          </h1>

          <div className="absolute top-56 sm:top-24 md:top-40 lg:top-28 left-0 right-0 sm:left-16 sm:right-16 flex flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
            <div
              className="w-12 sm:w-40 lg:w-48 h-48 sm:h-48 lg:h-56 bg-blue-200 rounded-l-none rounded-r-3xl sm:rounded-3xl shadow-md shadow-gray-500"
              style={{
                backgroundImage: `url(${images[getImageIndex(-1)]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="w-48 sm:w-56 lg:w-64 h-80 sm:h-64 lg:h-72 bg-blue-300 rounded-3xl shadow-md shadow-gray-500"
              style={{
                backgroundImage: `url(${images[getImageIndex(0)]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="w-12 sm:w-40 lg:w-48 h-48 sm:h-48 lg:h-56 bg-blue-200 rounded-r-none rounded-l-3xl sm:rounded-3xl shadow-md shadow-gray-500"
              style={{
                backgroundImage: `url(${images[getImageIndex(1)]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          <div className="absolute hidden sm:flex bottom-36 sm:bottom-24 space-x-3">
            <button
              onClick={() => goToSlide(-1)}
              className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-white"
            />
            <button
              onClick={() => goToSlide(0)}
              className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-white"
            />
            <button
              onClick={() => goToSlide(1)}
              className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;