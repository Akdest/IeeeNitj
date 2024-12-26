"use client";
import { useEffect, useState } from "react";
export default function NavigationBar({login = false}) {
  const [log, setLog] = useState("LOG IN") 
  const [hamburger, setHamburger] = useState(false);
  useEffect(() => {
    if (hamburger) {
      document
        .getElementsByClassName("menuBar")[0]
        .classList.remove("ml-[-470px]");
      document
        .getElementsByClassName("menuBar")[0]
        .classList.add("ml-[-100px]");
    } else {
      document
        .getElementsByClassName("menuBar")[0]
        .classList.remove("ml-[-100px]");
      document
        .getElementsByClassName("menuBar")[0]
        .classList.add("ml-[-470px]");
    }
  }, [hamburger]);

  useEffect(()=> {
    if(login){setLog("LOG OUT")}
    else{setLog("LOG IN")}
  }, [login])
  return (
    <div className="relative w-full z-50">
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
        className="menuBar fixed pt-16 pb-10 pr-20 pl-5 h-[580px] mt-[60px] ml-[-470px]"
        style={{
          borderRadius: "80px",
          border: "1px solid #000",
          background: "rgba(217, 217, 217, 0.10)",
          boxShadow:
            "69.433px -69.433px 69.433px 0px rgba(165, 165, 165, 0.10) inset, -69.433px 69.433px 69.433px 0px rgba(255, 255, 255, 0.10)",
          backdropFilter: "blur(69.43333435058594px)",
          transition: "0.25s linear",
          width:"465px"
        }}
      >
        <ul className="flex flex-col gap-8" style={{ fontFamily: "Michroma" }}>
          <li>
            <a href="" className="font-normal text-4xl ml-[120px]">
              HOME
            </a>
            <hr />
          </li>
          <li>
            <a href="" className="font-normal text-4xl ml-[120px]">
              EVENTS
            </a>
            <hr />
          </li>
          <li>
            <a href="" className="font-normal text-4xl ml-[120px]">
              NEWS
            </a>
            <hr />
          </li>
          <li>
            <a href="" className="font-normal text-4xl ml-[120px]">
              GALLERY
            </a>
            <hr />
          </li>
          <li>
            <a href="" className="font-normal text-4xl ml-[120px]">
              COMMITTEE
            </a>
            <hr />
          </li>
          <li>
            <a href="" className="font-normal text-4xl ml-[120px]">
              CONTACTS
            </a>
            <hr />
          </li>
          <li>
            <a href="" className="font-normal text-4xl ml-[120px]">
                {log}
            </a>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
}
