"use client";
import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar({ login = false }) {
  const log = login ? "Log Out" : "Log In";
  const [hamburger, setHamburger] = useState<boolean>(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const toggleSubMenu = (menu: string) => {
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
      <div className="navBar p-5 h-[90px] fixed top-0 w-full z-50 backdrop-blur-lg bg-[#0b112660] border-b border-white/20">
        <div className="head fixed left-5 flex justify-center items-center w-[180px] h-[59px] rounded-lg font-semibold bg-white text-black p-2 ">
          <img src="/IEEE NITJ Student Branch (1).jpg" alt="" className="w-full h-full rounded-lg"/>
        </div>
        <div className="hamBurger fixed right-5">
          <button
            onClick={() => {
              setHamburger(!hamburger);
            }}
            className="bg-[#00367070] rounded-xl flex justify-center items-center"
          >
            <img src="/ci_hamburger-lg.svg" alt="" className="w-11/12 h-full" />
          </button>
        </div>
      </div>
      <div
        className={`menuBar overflow-auto fixed top-0 pt-16 pb-10 pr-20 pl-5 h-screen w-full grid sm:grid-cols-2 grid-cols-1 gap-20 transition-all duration-500 ease-in-out ${
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
        <div className="sm:grid grid-cols-2 xl:gap-10 lg:gap-40 sm:gap-28 hidden">
          <ul className="mainMenu flex flex-col gap-8 text-[#94C4FB] xl:w-96 lg:w-72 sm:w-48 w-96">
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
                    className={`font-normal xl:text-4xl lg:text-3xl sm:text-lg text-2xl ml-10 cursor-pointer ${
                      activeSubMenu === name ? "text-white" : "hover:text-white"
                    }`}
                    onClick={() => toggleSubMenu(name)}
                  >
                    {name}{" "}
                    <FontAwesomeIcon
                      icon={faArrowRightToBracket}
                      className="lg:w-5 lg:h-5 mb-1 w-3 h-3"
                    />
                  </p>
                ) : (
                  <a
                    href={link}
                    className="font-normal xl:text-4xl lg:text-3xl sm:text-lg text-2xl ml-10 hover:text-white"
                  >
                    {name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <ul
            className={`subMenu flex flex-col gap-8 text-[#94C4FB] overflow-x-hidden p-5 border border-[#94C4FB] rounded-xl bg-[#94c4fb2f] xl:w-72 lg:w-48 sm:w-36 ${
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
                    className="font-normal xl:text-2xl lg:text-lg sm:text-sm hover:text-white"
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
                    className="font-normal xl:text-2xl lg:text-lg sm:text-sm hover:text-white"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div className="sm:hidden h-screen overflow-y-auto overflow-x-hidden">
          <ul className="mainMenu flex flex-col gap-8 text-[#94C4FB] xl:w-96 lg:w-72 sm:w-48 w-96">
            {[
              { name: "Home", link: "#" },
              { name: "Events", link: "#" },
              { name: "News", subMenu: true, subValues:[
                { nameSub: "Good News", linkSub: "#" },
                { nameSub: "Bad News", link: "#" },
              ] },
              { name: "Gallery", link: "#" },
              { name: "Committee", subMenu: true, subValues:[
                { nameSub: "Secretary", linkSub: "#" },
                { nameSub: "Student", linkSub: "#" },
              ] },
              { name: "Contacts", link: "#" },
              { name: log, link: "#" },
            ].map(({ name, link, subMenu, subValues }, idx) => (
              <li key={idx}>
                {subMenu ? (
                  <div
                    className={`font-normal xl:text-4xl lg:text-3xl sm:text-lg text-2xl ml-10 cursor-pointer ${
                      activeSubMenu === name ? "text-white" : "hover:text-white"
                    }`}
                    onClick={() => toggleSubMenu(name)}
                  >
                    {name}{" "}
                    <FontAwesomeIcon
                      icon={faArrowRightToBracket}
                      className="lg:w-5 lg:h-5 mb-1 w-3 h-3"
                    />
                    <ul
                    className={`subMenu flex flex-col gap-8 text-[#94C4FB] overflow-x-hidden border border-[#94C4FB] rounded-xl bg-[#94c4fb2f] xl:w-72 lg:w-48 sm:w-36 w-fit ${
                      activeSubMenu === name? "h-full p-5 opacity-100 mt-5" : "h-0 p-0 opacity-0 mt-0"
                    } transition-all ease-in-out duration-500`}
                    >{subValues.map(({ nameSub, linkSub },idx) => (
                      <li key={idx} className={`${activeSubMenu === name?"flex":"hidden"}`}>
                        <a
                          href={linkSub}
                          className={`font-normal xl:text-2xl lg:text-lg sm:text-sm text-lg hover:text-white`}
                        >
                          {nameSub}
                        </a>
                      </li>
                    ))}</ul>
                  </div>
                ) : (
                  <a
                    href={link}
                    className="font-normal xl:text-4xl lg:text-3xl sm:text-lg text-2xl ml-10 hover:text-white"
                  >
                    {name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative animate-vibrate sm:flex hidden">
          {/* <iframe src="https://lottie.host/embed/26d85033-ae9a-4ed2-a580-16f952da2294/DXcbJlNFtf.lottie" className="w-2/5 h-2/5 absolute bottom-40"></iframe>
          <iframe src="https://lottie.host/embed/26d85033-ae9a-4ed2-a580-16f952da2294/DXcbJlNFtf.lottie" className="w-1/3 h-1/3 absolute top-0 right-1/3"></iframe> */}

            <iframe
              src="https://lottie.host/embed/26d85033-ae9a-4ed2-a580-16f952da2294/DXcbJlNFtf.lottie"
              className="xl:w-[300px] xl:h-[300px] lg:w-[350px] lg:h-[300px] sm:w-[300px] sm:h-[250px] absolute xl:bottom-[235px] xl:right-[190px] bottom-[180px] lg:right-[65px] sm:right-[0px] -z-30"
            ></iframe>
            <div className="xl:w-[425px] xl:h-[300px] lg:w-[350px] lg:h-[300px] sm:w-[315px] sm:h-[250px] border border-[#94C4FB] -z-50 absolute xl:bottom-[220px] xl:right-[130px] bottom-[170px] lg:right-[65px] sm:right-[0px] rounded-xl bg-[#94c4fb2f]"></div>
            <div className="flex flex-col items-center absolute xl:bottom-[200px] xl:right-[175px] bottom-[150px] lg:right-[100px] sm:right-[35px] w-fit text-[#94C4FB] bg-[#0b1126] pt-3 pb-3 p-5 rounded-xl border border-black">
              <h1
                className="xl:text-xl lg:text-base sm:text-sm inline-block border-r-2 border-[#94C4FB] whitespace-nowrap overflow-hidden w-[10ch] animate-typing font-extralight drop-shadow-lg "
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
