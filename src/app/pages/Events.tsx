"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { Michroma } from "next/font/google";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });

export function Events() {
  const dataEvents = [
    {
      id: 1,
      img: "/event-1.png",
      head: "Challenges in Design and Fabrication of DSM Transistor",
      subHead:
        "By Professor H.S Jatana, Ex-Head of the Design and Process Group Semi-Conductor Laboratory, Chandigarh India",
      des: "The Department of Electronics & Communication Engineering has organized an expert lecture of Prof. Jatana on 20 November 2023 in seminar room number E1 at 12:00 PM. The students of B.Tech, MTech, PhD Research scholars and Faculty members had attended it. Dr Manjeet Singh, Assistant Professor, ECE Department felicitated Prof. Jatana with a token of gratitude",
    },
    {
      id: 2,
      img: "/event-2.png",
      head: "Expert Talk on “The Thrilling Odyssey of Trusted AI” ",
      subHead:
        "by Dr. Richa Singh, Professor IIT Jodhpur (IEEE Fellow) 13 March 2024",
      des: "IEEE Student Branch of ECE Department, Dr. B. R. Ambedkar National Institute of Technology Jalandhar organized an illuminating expert talk on 'The Thrilling Odyssey of Trusted AI' on March 13, 2024. The event was graced by the presence of Prof. Binod Kumar Kanaujia (Director of NIT Jalandhar, faculty Advisor IEEE Branch Dr B R Ambedkar NIT Jalandhar and Executive Committee Member of IEEE Delhi Section). ",
    },
    {
      id: 3,
      img: "/event-3.png",
      head: "Expert Talk on “Algorithm-to-circuit design using the AHIR-V2 tool-set” ",
      subHead: "by Dr. Madhav Desai, Professor IIT Bombay 8th April 2024",
      des: "An expert talk on 'Algorithm-to-circuit design using the AHIR-V2 tool-set' organized by IEEE Student Branch of Dr. B. R. Ambedkar National Institute of Technology Jalandhar on April 8, 2024. Event was conducted under the mentorship of Prof. Binod Kumar Kanaujia (Director of NIT Jalandhar, faculty Advisor IEEE Branch Dr B R Ambedkar NIT Jalandhar and Executive Committee Member of IEEE Delhi Section).  ",
    },
    {
      id: 4,
      img: "/event-4.png",
      head: "One Day Workshop on Electromagnetics for Engineers ",
      subHead:
        "by Prof. Sembiam R Rengarajan (IEEE Fellow) and Prof Taimoor Khan 16 Jan 2025",
      des: "The Department of Electronics and Communication Engineering at Dr. B. R. Ambedkar National Institute of Technology Jalandhar organized an illuminating workshop on                          'Electromagnetics for Engineers' on Thursday 16th, January 2025, under the aegis of the IEEE Student Branch. The event was graced by the presence of Prof. Binod Kumar Kanaujia (Director of NIT Jalandhar, Faculty Advisor of IEEE Student Branch). The workshop was completed into  two sessions (1-2).",
    },
  ];
  return (
    <div
      className={`h-full w-screen relative flex flex-col justify-center items-center ${michroma.className}`}
    >
      <div
        style={{
          background: "linear-gradient(180deg, #EBF7FD 80%, #AFCFF1 100%)",
        }}
        className="h-screen w-full fixed top-0 -z-50"
      ></div>
      <h1 className="z-50 text-4xl mt-12">EVENTS</h1>
      <div className="flex flex-col items-center justify-center gap-16 p-10">
        {dataEvents.map((item) => (
          <div className="flex md:flex-row flex-col items-center justify-center rounded-tl-[50px] rounded-br-[50px]">
            <div className="relative bg-[#3f4b6715] h-fit w-fit rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none rounded-tr-xl">
              <div className="w-4 h-4 bg-white rounded-full absolute md:top-1/2 md:left-1 left-1/2 top-1"></div>
              <CardContainer className="">
                <CardBody className=" relative group/card  dark:hover:shadow-2xl  dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[25rem] h-auto p-6 ">
                  <CardItem translateZ="50" className="w-full">
                    <div
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      style={{
                        background: `url(${item.img})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
            <div className="bg-[#3f4b6715] sm:rounded-xl rounded-bl-xl rounded-br-xl">
              <CardContainer className="">
                <CardBody className=" relative group/card  dark:hover:shadow-2xl  dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] max-w-[40rem] w-fit md:min-h-[25rem] h-fit  p-6 flex flex-col justify-center">
                  <CardItem
                    translateZ="40"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {item.head}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="30"
                    className="text-neutral-500 font-semibold text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {item.subHead}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="30"
                    className="text-neutral-500 text-sm mt-10 text-justify dark:text-neutral-300"
                  >
                    {item.des}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
