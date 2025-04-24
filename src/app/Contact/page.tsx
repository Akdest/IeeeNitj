"use client";
import React from "react";
import { Michroma } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
 
} from "@fortawesome/free-brands-svg-icons";
import {
  faPeopleGroup,
  faPhone,
  faEnvelope,
  faLocationDot,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import NavigationBar from "../components/Navigation";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <NavigationBar />
      <div className="w-full py-24 md:py-10 lg:py-12 min-h-screen bg-gradient-to-b from-[#EBF7FD] to-[#AFCFF1] flex flex-col items-center px-4">
        <h1
          className={`text-4xl sm:text-5xl font-extrabold mb-16 ${michroma.className} text-center text-black`}
          style={{
            WebkitTextStrokeWidth: 1,
            WebkitTextStrokeColor: "#8A92DD",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          CONTACTS
        </h1>

        {/* Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
          <Link href="https://www.nitj.ac.in" target="_blank" className="w-[150px]">
            <Image
              src="/logo_250.png"
              alt="NITJ Logo"
              className="w-full h-auto"
              width={1000}
              height={1000}
            />
          </Link>
          <Link href="/" className="w-[150px]">
            <Image
              src="/IEEE NITJ Student Branch (1).jpg"
              alt="IEEE NITJ Logo"
              className="w-full h-auto rounded-lg"
              width={1000}
              height={1000}
            />
          </Link>
        </div>

        {/* Glass Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {[
            {
              icon: faPeopleGroup,
              title: "Team IEEE",
              href: "/Commitee",
            },
            {
              icon: faPhone,
              title: "Phone",
              href: "tel:+91-0181-5037855",
            },
            {
              icon: faGlobe,
              title: "NITJ Website",
              href: "https://www.nitj.ac.in",
            },
            {
              icon: faLocationDot,
              title: "NIT Jalandhar",
              href: "https://maps.app.goo.gl/BSntU6E47CT1g24L8",
            },
            {
              icon: faInstagram,
              title: "@ieee_nitj",
              href: "https://www.instagram.com/ieee_nitj/?__pwa=1#",
            },
            {
              icon: faEnvelope,
              title: "Mail",
              href: "mailto:ieeenitj@nitj.ac.in",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              className="backdrop-blur-md bg-white/20 border border-white/30 shadow-xl rounded-3xl p-8 text-center text-black hover:scale-[1.02] transition-all duration-300"
            >
              <FontAwesomeIcon icon={item.icon} size="2x" className="text-[#1F41BB] mb-4" />
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
