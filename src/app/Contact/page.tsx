// app/contact/page.tsx or pages/contact.tsx

"use client";
import React from "react";
import { Button } from "../../components/ui/moving-border";
import { Michroma } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faPeopleGroup,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });

export default function Contact() {
  return (
    <div
      className={`${michroma.className} flex flex-col gap-5 items-center justify-center p-5 text-white bg-black h-screen`}
    >
      <h1 className="text-3xl mb-20">CONTACTS</h1>
      <Button
        borderRadius="1.75rem"
        className="bg-slate-900 text-white border-slate-800 grid grid-cols-1 sm:grid-cols-2 text-left h-fit p-5 w-fit hover:cursor-default"
      >
        <div className="w-[150px] mx-auto flex flex-col gap-5 items-center justify-center sm:mb-0 mb-5">
          <Link href="https://www.nitj.ac.in" target="_blank" className="w-fit">
            <Image src="/logo_250.png" alt="" className="w-full h-full" width={1000} height={1000} />
          </Link>
          <Link href="/" className="w-fit">
            <Image
              src="/IEEE NITJ Student Branch (1).jpg"
              alt=""
              className="w-full h-full rounded-lg"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center sm:gap-5 sm:border-l-2 sm:border-t-0 border-t-2 sm:mt-0 mt-5">
          <Link href="" className="w-fit sm:mx-5 sm:mt-0 mt-10">
            <FontAwesomeIcon icon={faPeopleGroup} /> Team IEEE
          </Link>
          <Link
            href="tel:+91 7895285800"
            className="w-fit sm:mx-5 sm:mt-0 mt-5"
            target="_blank"
          >
            <FontAwesomeIcon icon={faPhone} /> +91 7895285800
          </Link>
          <Link
            href="mailto:xyz@gmail.com"
            className="w-fit sm:mx-5 sm:mt-0 mt-5"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} /> xyz@gmail.com
          </Link>
          <Link
            href="https://shorturl.at/Y5EyD"
            target="_blank"
            className="w-fit sm:mx-5 sm:mt-0 mt-5"
          >
            <FontAwesomeIcon icon={faLocationDot} /> NIT Jalandhar
          </Link>
          <Link
            href="https://www.instagram.com/ieee_nitj/?__pwa=1#"
            target="_blank"
            className="w-fit sm:mx-5 sm:mt-0 mt-5"
          >
            <FontAwesomeIcon icon={faInstagram} /> ieee_nitj
          </Link>
        </div>
      </Button>
    </div>
  );
}
