"use client"

import React, { useState, useEffect } from "react";

const image1 = '/image1.jpeg' as unknown as StaticImageData;
const image2 = '/image2.jpeg' as unknown as StaticImageData;
const image3 = '/image3.jpeg' as unknown as StaticImageData;
const image4 = '/image4.jpeg' as unknown as StaticImageData;
import { StaticImageData } from "next/image";

const images: StaticImageData[] = [image1, image2, image3, image4];

const Herosection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="relative h-screen" style={{
          backgroundImage: "url('/main.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 flex justify-center items-center rounded-none">
  <div className="w-screen h-screen md:shadow-lg">
    <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 bg-white overflow-hidden rounded-none">
      {/* Background Carousel */}
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white drop-shadow-lg text-center">
          INSTITUTE OF ELECTRICAL AND
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white drop-shadow-lg text-center">
          ELECTRONICS ENGINEERS
        </h1>
        <h1 className="text-lg md:text-2xl lg:text-4xl mt-4 md:mt-8 text-white drop-shadow-lg text-center font-semibold hidden md:block">
          STUDENT CHAPTER NIT JALANDHAR
        </h1>

        {/* Dotted Navigation */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default Herosection;
