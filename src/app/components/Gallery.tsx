"use client";

import React, { useState, useEffect } from "react";
import { Michroma } from "next/font/google";
import { StaticImageData } from "next/image";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });

const image1 = "/image1.jpeg" as unknown as StaticImageData;
const image2 = "/image2.jpeg" as unknown as StaticImageData;
const image3 = "/image3.jpeg" as unknown as StaticImageData;
const image4 = "/image4.jpeg" as unknown as StaticImageData;

const leftArrow = "/left_arrow.png";
const rightArrow = "/right_arrow.png";

const images: StaticImageData[] = [image1, image2, image3, image4];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getImageIndex = (offset: number): number => {
    return (currentIndex + offset + images.length) % images.length;
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="relative h-screen"
      // style={{
      //   backgroundImage: "url('/main.svg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div
        className="absolute top-6 left-4 right-4 bottom-6 md:top-12 md:left-12 md:right-12 
        md:bottom-12 flex justify-center items-center rounded-[20px] md:rounded-[40px]"
        // style={{ backgroundColor: "#374E72" }}
      >
        <div className="p-2 md:p-4 shadow-lg">
          <div
            className="absolute top-4 left-4 right-4 bottom-4 md:top-9 md:left-9 md:right-9 md:bottom-9 overflow-hidden 
            rounded-[20px] md:rounded-[40px]"
            // style={{ backgroundColor: "#E0F4FF" }}
          >
            <div>
              <div className="absolute top-8 md:top-14 left-0 right-0 text-center">
                <h1
                  className={`text-center text-black font-bold text-4xl my-14 md:my-0 ${michroma.className}`} style={{textShadow:'0px 2px 3px rgba(0, 0, 0, 0.5)'}}
                >
                  GALLERY SECTION
                </h1>
                <div className="flex justify-between items-center mt-10 md:mt-14">
                  {/* Left Arrow */}
                  <img
                    src={leftArrow}
                    alt="Left Arrow"
                    className="w-6 md:w-10 cursor-pointer ml-3 md:block"
                    onClick={prevSlide}
                  />

                  {/* Carousel Images */}
                  <div className="flex md:space-x-28 items-center justify-center">
                    {/* Div 1: Hidden on mobile */}
                    <div
                      className="hidden md:block w-32 shadow-xl h-40 md:w-56 md:h-64 bg-blue-200 rounded-[15px] md:rounded-[25px]"
                      style={{
                        backgroundImage: `url(${images[getImageIndex(-1)]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    
                    {/* Div 2: Centered on mobile */}
                    <div
                      className={`w-[200px] h-[300px] shadow-xl my-6 sm:my-10 md:my-0 md:w-72 md:h-80 bg-blue-300 rounded-[15px] sm:rounded-[20px] md:rounded-[30px]`}
                      style={{
                        backgroundImage: `url(${images[getImageIndex(0)]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* Div 3: Hidden on mobile */}
                    <div
                      className="hidden md:block w-32 h-40 shadow-xl md:w-56 md:h-64 bg-blue-200 rounded-[15px] md:rounded-[25px]"
                      style={{
                        backgroundImage: `url(${images[getImageIndex(1)]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>

                  {/* Right Arrow */}
                  <img
                    src={rightArrow}
                    alt="Right Arrow"
                    className="w-6 md:w-10 cursor-pointer mr-3 md:block"
                    onClick={nextSlide}
                  />
                </div>


                {/* Dotted Navigation */}
                <div className="absolute mt-6 md:mt-9 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
