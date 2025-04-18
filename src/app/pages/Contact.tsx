"use client";
import React from "react";
import { Button } from "../../components/ui/moving-border";
import { Michroma } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import {
  faPeopleGroup,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });
export function Contact() {
  return (
    <div
      className={`${michroma.className} flex flex-col gap-5 items-center justify-center p-5`}
    >
      
      <h1 className="text-3xl mb-20 mt-24">CONTACTS</h1>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 text-left h-fit p-5 w-fit hover:cursor-default"
      >
        <div className="w-[150px] mx-auto flex flex-col gap-5 items-center justify-center sm:mb-0 mb-5">
          <a href="https://www.nitj.ac.in" target="_blank" className="w-fit">
            <img src="/logo_250.png" alt="" className="w-full h-full" />
          </a>
          <a href="/" className="w-fit">
            <img
              src="/IEEE NITJ Student Branch (1).jpg"
              alt=""
              className="w-full h-full rounded-lg"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center sm:gap-5 sm:border-l-2 sm:border-t-0 border-t-2 sm:mt-0 mt-5">
          <a href="" className="w-fit sm:mx-5 sm:mt-0 mt-10">
            <FontAwesomeIcon icon={faPeopleGroup} /> Team IEEE
          </a>
          <a href="tel:+91 7895285800" className="w-fit sm:mx-5 sm:mt-0 mt-5" target="_blank">
            <FontAwesomeIcon icon={faPhone} /> +91 7895285800
          </a>
          <a href="mailto:xyz@gmail.com" className="w-fit sm:mx-5 sm:mt-0 mt-5" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} /> xyz@gmail.com
          </a>
          <a href="https://shorturl.at/Y5EyD" target="_blank" className="w-fit sm:mx-5 sm:mt-0 mt-5">
            <FontAwesomeIcon icon={faLocationDot} /> NIT Jalandhar
          </a>
          <a
            href="https://www.instagram.com/ieee_nitj/?__pwa=1#"
            target="_blank"
            className="w-fit sm:mx-5 sm:mt-0 mt-5"
          >
            <FontAwesomeIcon icon={faInstagram} />{" "}ieee_nitj
          </a>
        </div>
      </Button>
    </div>
  );
}
