"use client";

import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = showSplash ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSplash]);

  if (!showSplash) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #004E92 30%, #000428 95%)",
      }}
    >
      {/* Desktop Layout */}
      <div className="hidden sm:flex w-full h-full">
        <div
          className="mx-auto w-11/12 h-[98vh] rounded-tl-[65px] rounded-tr-[65px] border border-black overflow-clip relative"
          style={{
            background: "rgba(217, 217, 217, 0.10)",
            boxShadow:
              "75.23px -75.23px 75.23px 0px rgba(165, 165, 165, 0.10) inset, -75.23px 75.23px 75.23px 0px rgba(255, 255, 255, 0.10)",
            backdropFilter: "blur(75.2302017211914px)",
          }}
        >
          <img
            src="/cover.svg"
            alt="cover"
            className="relative w-[95%] mt-10 mx-auto"
          />
          <div className="absolute top-0 w-full h-full overflow-clip">
            <img
              src="/Frame 2270.png"
              alt=""
              className="relative z-[1000] w-[88%] h-[85vh] mx-auto mt-10 bg-transparent"
              style={{
                filter:
                  "drop-shadow(0px 4.334px 4.334px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4.334px 4.334px rgba(0, 0, 0, 0.25))",
              }}
            />
            <img
              src="/Group 60.svg"
              alt=""
              className="absolute left-20 top-24"
            />
            <img
              src="/Group 61.svg"
              alt=""
              className="absolute right-20 top-24"
            />
            <div className="absolute md:bottom-56 lg:bottom-48 w-full text-center px-6">
              <div
                className="text-black lg:text-4xl md:text-2xl  sm:text-2xl mx-auto max-w-4xl"
                style={{
                  textShadow: "0px 4.334px 4.334px rgba(0, 0, 0, 0.25)",
                  fontFamily: "Michroma",
                }}
              >
                EMPOWERING TOMORROW&apos;S INNOVATORS AT NIT JALANDHAR!
              </div>
              <div
                className="mt-4 text-black text-xl"
                style={{ fontFamily: "Michroma" }}
              >
                Connect.Learn.Innovate.Lead
              </div>
              <img
                src="/ellipse.svg"
                alt="spinner"
                className="mx-auto mt-5 w-[28%] h-[28%] animate-spin-slow"
              />
            </div>
          </div>

          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black cursor-pointer"
            onClick={() => setShowSplash(false)}
          >
            <FaAngleDown size={40} className="animate-bounce" />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex sm:hidden relative w-full h-full flex-col items-center justify-start pt-20 px-4">
        <img
          src="/Rectangle 89.png"
          alt="mobile bg"
          className="w-[96%] h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center px-4 text-center">
          <div
            className="text-black text-2xl sm:text-3xl font-semibold mb-6"
            style={{
              textShadow: "0px 4.334px 4.334px rgba(0, 0, 0, 0.25)",
              fontFamily: "Michroma",
            }}
          >
            EMPOWERING TOMORROW&aops;S INNOVATORS AT NIT JALANDHAR!
          </div>
          <div
            className="text-black text-lg mb-8"
            style={{ fontFamily: "Michroma" }}
          >
            Connect.Learn.Innovate.Lead
          </div>
          <img
            src="/ellipse.svg"
            alt="spinner"
            className="w-[65%] h-[65%] animate-spin-slow mb-6"
          />
          <div className="text-black cursor-pointer" onClick={() => setShowSplash(false)}>
            <FaAngleDown size={36} className="animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
