"use client";
import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar({ login = false }) {
  const log = login ? "Log Out" : "Log In";
  const [hamburger, setHamburger] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const toggleSubMenu = (menu = null) => {
    setActiveSubMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  return (
    <div className="relative w-full z-50" style={{ fontFamily: "Michroma" }}>
      {/* <div
        className="main fixed top-0 -z-10 w-full h-full"
        style={{
          background: "url('/main.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
      </div> */}
      <div className="navBar p-5">
        <div className="head fixed left-5 flex justify-center items-center w-[169px] h-[59px] rounded-[47.798px] font-semibold bg-[#D9D9D9] text-black">
          <h1 className="text-[45px] italic">IEEE</h1>
        </div>
        <div className="hamBurger fixed right-5">
          <button
            onClick={() => {
              setHamburger(!hamburger);
            }}
          >
            <img src="/ci_hamburger-lg.svg" alt="" className="w-11/12 h-full" />
          </button>
        </div>
      </div>
      <div
        className={`menuBar overflow-auto fixed top-0 pt-16 pb-10 pr-20 pl-5 h-screen w-full grid grid-cols-2 transition-all duration-500 ease-in-out ${
          hamburger ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
        style={{
          border: "1px solid #000",
          background: "rgba(11, 17, 38, 0.81)",
          boxShadow:
            "-69.433px 69.433px 69.433px 0px rgba(255, 255, 255, 0.10)",
          backdropFilter: "blur(9.43333435058594px)",
          transition: "0.3s linear",
        }}
      >
        <div className="cross fixed right-5 p-5">
          <button
            onClick={() => {
              setHamburger(!hamburger);
            }}
          >
            <img src="/cross.png" alt="" className="w-11/12 h-full" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <ul className="mainMenu flex flex-col gap-8 text-[#94C4FB]">
            {[
              { name: "Home", link: "#" },
              { name: "Events", link: "#" },
              { name: "News", subMenu: true },
              { name: "Gallery", link: "#" },
              { name: "Committee", subMenu: true },
              { name: "Contacts", link: "#" },
              { name: log, link: "#" },
            ].map(({ name, link, subMenu }, idx) => (
              <li key={idx}>
                {subMenu ? (
                  <p
                    className={`font-normal text-4xl ml-10 cursor-pointer ${
                      activeSubMenu === name ? "text-white" : "hover:text-white"
                    }`}
                    onClick={() => toggleSubMenu(name)}
                  >
                    {name}{" "}
                    <FontAwesomeIcon
                      icon={faArrowRightToBracket}
                      className="w-5 h-5 mb-1"
                    />
                  </p>
                ) : (
                  <a
                    href={link}
                    className="font-normal text-4xl ml-10 hover:text-white"
                  >
                    {name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <ul
            className={`subMenu flex flex-col gap-8 text-[#94C4FB] overflow-x-hidden p-5 border border-[#94C4FB] rounded-xl bg-[#94c4fb2f] ${
              activeSubMenu ? "opacity-100" : "opacity-0"
            } transition-all ease-in-out duration-500`}
          >
            <div
              className={`transition-all duration-500 ease-in-out ${
                activeSubMenu === "Committee"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }
          `}
            >
              {[
                { name: "Secretary", link: "#" },
                { name: "Student", link: "#" },
              ].map(({ name, link },idx) => (
                <li key={idx}>
                  <a
                    href={link}
                    className="font-normal text-2xl hover:text-white"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </div>
            <div
              className={`transition-all duration-500 ease-in-out ${
                activeSubMenu === "News"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }
          `}
            >
              {[
                { name: "Good News", link: "#" },
                { name: "Bad News", link: "#" },
              ].map(({ name, link },idx) => (
                <li key={idx}>
                  <a
                    href={link}
                    className="font-normal text-2xl hover:text-white"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div className="relative animate-vibrate">
          {/* <iframe src="https://lottie.host/embed/26d85033-ae9a-4ed2-a580-16f952da2294/DXcbJlNFtf.lottie" className="w-2/5 h-2/5 absolute bottom-40"></iframe>
          <iframe src="https://lottie.host/embed/26d85033-ae9a-4ed2-a580-16f952da2294/DXcbJlNFtf.lottie" className="w-1/3 h-1/3 absolute top-0 right-1/3"></iframe> */}

          <iframe
            src="https://lottie.host/embed/26d85033-ae9a-4ed2-a580-16f952da2294/DXcbJlNFtf.lottie"
            className="w-[300px] h-[300px] absolute bottom-[235px] right-[190px] -z-30"
          ></iframe>
          <div className="w-[425px] h-[300px] border border-[#94C4FB] -z-50 absolute bottom-[220px] right-[130px] rounded-xl bg-[#94c4fb2f]"></div>
          <div className="flex flex-col items-center absolute bottom-[200px] right-[175px] w-fit text-[#94C4FB] bg-[#0b1126] pt-3 pb-3 p-5 rounded-xl border border-black">
            <h1
              className="text-xl inline-block border-r-2 border-[#94C4FB] whitespace-nowrap overflow-hidden w-[10ch] animate-typing font-extralight drop-shadow-lg "
              style={{ textShadow: "0 0px 2px rgba(255, 255, 255, 0.5)" }}
            >
              Welcome to IEEE NITJ
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
