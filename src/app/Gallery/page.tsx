"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Michroma } from "next/font/google";
import NavigationBar from "../components/Navigation";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });

const carouselImages = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
];

const gridImages = [
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
];

export default function GalleryPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <NavigationBar/>
    <div className={`min-h-screen w-full bg-gradient-to-b from-[#EBF7FD] to-[#AFCFF1] ${michroma.className}`}>
      
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-[#1F41BB]">Gallery</h1>
        <p className="text-gray-600 mt-2 text-lg">Moments that matter</p>
      </div>

      {/* Auto Carousel */}
      <div className="w-full flex justify-center items-center overflow-hidden px-6">
        <motion.div
          key={current}
          className="relative w-full max-w-4xl h-[400px] overflow-hidden rounded-3xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={carouselImages[current]}
            alt={`Carousel ${current + 1}`}
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>
      </div>

      {/* Grid Gallery */}
      <div className="mt-20 px-6 max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {gridImages.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={src}
                alt={`Grid ${index + 1}`}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
