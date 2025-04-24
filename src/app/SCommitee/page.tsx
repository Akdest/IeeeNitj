"use client";

import Image from "next/image";
import NavigationBar from "../components/Navigation";
import { Michroma } from "next/font/google";
import Footer from "../components/Footer";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });

const committeeMembers = [
  {
    name: "Aarav Mehta",
    role: "President",
    image: "/members/aarav.jpg",
   
    domain: "Core Team",
  },
  {
    name: "Neha Sharma",
    role: "Vice President",
    image: "/members/neha.jpg",
   
    domain: "Core Team",
  },
  {
    name: "Rohan Patel",
    role: "Technical Lead",
    image: "/members/rohan.jpg",
 
    domain: "Technical",
  },
  {
    name: "Simran Kaur",
    role: "Event Coordinator",
    image: "/members/simran.jpg",
 
    domain: "Management",
  },
  // Add more members with domains
];

export default function CommitteePage() {
  const groupedMembers = committeeMembers.reduce((acc, member) => {
    if (!acc[member.domain]) acc[member.domain] = [];
    acc[member.domain].push(member);
    return acc;
  }, {} as Record<string, typeof committeeMembers>);

  return (
    <>
      <NavigationBar />
      <div
        className={`min-h-screen py-24 md:py-10 lg:py-12 px-4 bg-gradient-to-b from-[#EBF7FD] to-[#AFCFF1] ${michroma.className}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center pb-10">
            <h2
              className={`text-4xl sm:text-5xl font-extrabold text-center ${michroma.className} text-black`}
              style={{
                WebkitTextStrokeWidth: 1,
                WebkitTextStrokeColor: "#8A92DD",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              STUDENT COMMITTEE
            </h2>
          </div>

          {Object.entries(groupedMembers).map(([domain, members]) => (
            <div key={domain} className="mb-16">
              <h3
                className={`text-3xl font-bold mb-6 text-left ${michroma.className} text-[#2F3D7E]`}
                style={{
                  WebkitTextStrokeWidth: 0.5,
                  WebkitTextStrokeColor: "#4756C9",
                  textShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                {domain}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {members.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl py-12 transition duration-300 group"
                  >
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-sm text-indigo-600">{member.role}</p>
                    
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
