"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Michroma } from "next/font/google";
import NavigationBar from "../components/Navigation";
import Footer from "../components/Footer";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });

const carouselImages = [
  "/event-1.png",
  "/event-2.png",
  "/event-3.png",
  "/event-4.png",
];

const gridImages = [
  "/event-1.png",
  "/event-2.png",
  "/event-3.png",
  "/event-4.png",
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
      <NavigationBar />
      <div
        className={`min-h-screen py-24 md:py-10 lg:py-12 px-6 w-full bg-gradient-to-b from-[#EBF7FD] to-[#AFCFF1] ${michroma.className}`}
      >
        {/* Header */}
        <div className="flex justify-center pb-10">
            <h2
              className={`text-4xl sm:text-5xl font-extrabold text-center ${michroma.className} text-black`}
              style={{
                WebkitTextStrokeWidth: 1,
                WebkitTextStrokeColor: "#8A92DD",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              GALLERY
            </h2>
          </div>

        {/* Auto Carousel */}
        <div className="w-full flex justify-center items-center overflow-hidden mb-20">
          <motion.div
            key={current}
            className="relative w-full max-w-4xl h-[400px] overflow-hidden rounded-3xl shadow-xl"
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
        <div className="max-w-6xl mx-auto">
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
      <Footer />
    </>
  );
}
