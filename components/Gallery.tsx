import React, { useState, useEffect } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

import image1 from "/image1.jpeg";
import image2 from "/image2.jpeg";
import image3 from "/image3.jpeg";
import image4 from "/image4.jpeg";

const images: string[] = [image1, image2, image3, image4];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number): void => {
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
    <div className="relative h-screen bg-blue-950">
      <div className="absolute top-6 left-4 right-4 bottom-6 md:top-12 md:left-12 md:right-12 md:bottom-12 flex justify-center items-center bg-blue-900 rounded-[20px] md:rounded-[40px]">
        <div className="p-2 md:p-4 shadow-lg">
          <div className="absolute top-4 left-4 right-4 bottom-4 md:top-9 md:left-9 md:right-9 md:bottom-9 bg-green-100 overflow-hidden rounded-[20px] md:rounded-[40px]">
            <div>
              <div className="absolute top-8 md:top-14 left-0 right-0 text-center">
                <h1 className="text-center font-semibold text-2xl md:text-4xl text-shadow-custom">
                  GALLERY SECTION
                </h1>
                <div className="flex justify-between items-center mt-10 md:mt-14">
                  {/* Left Arrow */}
                  <FaArrowAltCircleLeft
                    className="text-2xl md:text-4xl text-blue-300 ml-2 md:ml-5 cursor-pointer"
                    onClick={prevSlide}
                  />

                  {/* Carousel Images */}
                  <div className="flex space-x-8 md:space-x-28 items-center">
                    <div
                      className="w-32 h-40 md:w-56 md:h-64 bg-blue-200 rounded-[15px] md:rounded-[25px]"
                      style={{
                        backgroundImage: `url(${images[getImageIndex(-1)]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div
                      className="w-40 h-52 md:w-72 md:h-80 bg-blue-300 rounded-[20px] md:rounded-[30px]"
                      style={{
                        backgroundImage: `url(${images[getImageIndex(0)]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div
                      className="w-32 h-40 md:w-56 md:h-64 bg-blue-200 rounded-[15px] md:rounded-[25px]"
                      style={{
                        backgroundImage: `url(${images[getImageIndex(1)]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>

                  {/* Right Arrow */}
                  <FaArrowAltCircleRight
                    className="text-2xl md:text-4xl text-blue-300 mr-2 md:mr-5 cursor-pointer"
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
