"use client";

import React, { useRef } from "react";
import { Michroma, Montserrat } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import event1 from "../../../public/event-1.png";
import event2 from "../../../public/event-2.png";
import event3 from "../../../public/event-3.png";
import event4 from "../../../public/event-4.png";
import { FiExternalLink } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });
const montserrat = Montserrat({ weight: ["400"], subsets: ["latin"] });

interface HeadingProps {
  text: string;
}

interface NewsBubbleProps {
  text: string;
}

interface EventCardProps {
  text: string;
  img: StaticImageData;
}

export default function NewsEvents() {
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

  const NewsBubble: React.FC<NewsBubbleProps> = ({ text }) => (
    <div className="flex w-full items-center shadow border border-[#8AB6E8] bg-[#94C4FB] rounded-full px-4 py-3 hover:scale-[1.01] transition-transform duration-200">
      <div className="w-[5%] border-r-2 border-[#0C377B] h-full" />
      <div className={`w-[95%] px-4 text-sm sm:text-base ${montserrat.className}`}>
        {text}
      </div>
    </div>
  );

  const EventCard: React.FC<EventCardProps> = ({ text, img }) => (
    <div className="min-w-[250px] sm:min-w-[300px] h-[22rem] bg-white border border-[#1976D2] rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
      {/* Image Section */}
      <div className="h-[65%] relative">
        <Image
          src={img}
          alt={text}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-[#1976D2BF] opacity-0 hover:opacity-30 transition duration-300" />
      </div>

      {/* Content Section */}
      <div className="h-[35%] p-4 flex flex-col justify-between">
        <p className="text-sm sm:text-base font-medium text-[#0C377B] text-center leading-snug line-clamp-3 h-fit">
          {text}
        </p>
        <div className="flex justify-end pt-3">
          <div className="w-10 h-7 bg-[#1976D2] hover:bg-[#004e92] transition duration-300 rounded-full shadow-md cursor-pointer flex items-center justify-center">
            <FiExternalLink className="text-white text-xl" />
          </div>
        </div>
      </div>
    </div>
  );

  const Events = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
      if (scrollRef.current) {
        const scrollAmount = scrollRef.current.offsetWidth * 0.6;
        scrollRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    return (
      <div className="w-full sm:w-[65%]">
        <Heading text="UPCOMING EVENTS" />
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-white/30 p-3 rounded-full shadow-lg backdrop-blur-md hover:scale-110 transition"
          >
            <FaChevronLeft />
          </button>
    
          {/* Scrollable Event Cards Container */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide "
            style={{
              overflowX: "scroll",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // Internet Explorer
            }}
          >
            {/* Event Cards with Glassmorphism */}
            <EventCard
              img={event1}
              text="Challenges in Design and Fabrication of DSM Transistor"
            />
            <EventCard
              img={event2}
              text="Expert Talk on “The Thrilling Odyssey of Trusted AI”"
            />
            <EventCard
              img={event3}
              text="Expert Talk on “Algorithm-to-circuit design using the AHIR-V2 tool-set"
            />
            <EventCard
              img={event4}
              text="One Day Workshop on Electromagnetics for Engineers"
            />
            <EventCard
              img={event1}
              text="Challenges in Design and Fabrication of DSM Transistor"
            />
            <EventCard
              img={event2}
              text="Expert Talk on “The Thrilling Odyssey of Trusted AI”"
            />
            <EventCard
              img={event3}
              text="Expert Talk on “Algorithm-to-circuit design using the AHIR-V2 tool-set"
            />
            <EventCard
              img={event4}
              text="One Day Workshop on Electromagnetics for Engineers"
            />
          </div>
    
          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-white/30 p-3 rounded-full shadow-lg backdrop-blur-md hover:scale-110 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    );
    
  };

  const News = () => {
    const newsData = [
      "Challenges in Design and Fabrication of DSM Transistor",
      "Expert Talk on “The Thrilling Odyssey of Trusted AI",
      "Expert Talk on “Algorithm-to-circuit design using the AHIR-V2 tool-set",
      "One Day Workshop on Electromagnetics for Engineers",
    ];

    return (
      <div className="w-full sm:w-[35%] flex flex-col">
        <Heading text="NEWS" />
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[22rem] pr-2 sm:pr-4 py-8 scrollbar-thin scrollbar-track-[#DDEEFF] scrollbar-thumb-[#1976D2] hover:scrollbar-thumb-[#004e92] rounded-md">
          {newsData.map((text, i) => (
            <NewsBubble key={i} text={text} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-4 sm:px-10 py-10 sm:py-16">
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-12">
        <Events />
        <News />
      </div>
    </div>
  );
}
