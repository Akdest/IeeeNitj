import React, { useState, useEffect } from "react";

import image1 from "/image1.jpeg";
import image2 from "/image2.jpeg";
import image3 from "/image3.jpeg";
import image4 from "/image4.jpeg";

const images: string[] = [image1, image2, image3, image4];

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
    <div className="relative h-screen bg-blue-950">
      <div className="absolute inset-3 flex justify-center items-center bg-blue-900 rounded-[20px] md:rounded-[50px]">
        <div className="p-2 md:p-4 shadow-lg">
          <div className="absolute top-2 left-2 right-2 bottom-2 md:top-3 md:left-3 md:right-3 md:bottom-3 bg-white overflow-hidden rounded-[20px] md:rounded-[50px]">
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
                  className="w-full h-full flex-shrink-0"
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              ))}
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white drop-shadow-lg text-center">
                INSTITUTE OF ELECTRICAL AND
              </h1>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white drop-shadow-lg text-center">
                ELECTRONICS ENGINEERING
              </h1>
              <h1 className="text-lg md:text-2xl lg:text-4xl mt-4 md:mt-8 text-white drop-shadow-lg text-center">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
