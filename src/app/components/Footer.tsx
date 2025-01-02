"use client";
export default function Footer() {
  return (
    <div className="relative w-full h-screen">
      <div
        className="fixed top-0 w-full h-full -z-10"
        style={{
          background: "url('/main.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="footer absolute z-10 left-0 right-0"
        style={{ fontFamily: "Michroma" }}
      >
        <div
          className="footer1 relative w-full sm:h-[601px] h-[400px] flex-shrink-0 flex flex-col gap-5 justify-center items-center"
          style={{ background: "rgba(255, 255, 255, 0.80)" }}
        >
          <div className="text-black w-fit h-[40px] border-2 border-black flex items-center justify-center pr-5 pl-5 sm:text-2xl text-sm font-semibold">
            IEEE NITJ STUDENT CHAPTER
          </div>
          <div className="text-black sm:text-sm text-xs">
            FUELING IDEAS, FOSTERING GROWTH!
          </div>
          <button className="w-[150px] h-[30px] pt-5 pb-5 flex items-center justify-center rounded-[30px] bg-[#4277EA] text-[#ABC6F9] text-sm">
            Contact Us
          </button>
          <div>
            <ul className="flex">
              <li>
                <a href="">
                  <img
                    src="./social.svg"
                    alt=""
                    style={{
                      filter:
                        "drop-shadow(0px 8px 24px rgba(24, 39, 75, 0.2)) drop-shadow(0px 6px 12px rgba(24, 39, 75, 0.26))",
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="./social (1).svg"
                    alt=""
                    style={{
                      filter:
                        "drop-shadow(0px 8px 24px rgba(24, 39, 75, 0.2)) drop-shadow(0px 6px 12px rgba(24, 39, 75, 0.26))",
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="./social (2).svg"
                    alt=""
                    style={{
                      filter:
                        "drop-shadow(0px 8px 24px rgba(24, 39, 75, 0.2)) drop-shadow(0px 6px 12px rgba(24, 39, 75, 0.26))",
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="./social (3).svg"
                    alt=""
                    style={{
                      filter:
                        "drop-shadow(0px 8px 24px rgba(24, 39, 75, 0.2)) drop-shadow(0px 6px 12px rgba(24, 39, 75, 0.26))",
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="./social (4).svg"
                    alt=""
                    style={{
                      filter:
                        "drop-shadow(0px 8px 24px rgba(24, 39, 75, 0.2)) drop-shadow(0px 6px 12px rgba(24, 39, 75, 0.26))",
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="./social (5).svg"
                    alt=""
                    style={{
                      filter:
                        "drop-shadow(0px 8px 24px rgba(24, 39, 75, 0.2)) drop-shadow(0px 6px 12px rgba(24, 39, 75, 0.26))",
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="absolute flex overflow-hidden z-40 bottom-0 left-0 w-full">
                <img src="Rectangle 95.svg" alt="" className="wave-animation"/>
                <img src="Rectangle 95-rev.svg" alt="" className="wave-animation"/>
            </div>
            <div className="absolute flex overflow-hidden z-30 bottom-0 left-0 w-full">
                <img src="Rectangle 96.svg" alt="" className="wave-animation1"/>
                <img src="Rectangle 96-rev.svg" alt="" className="wave-animation1"/>
            </div>
            <div className="absolute flex overflow-hidden z-20 bottom-0 left-0 w-full">
                <img src="Rectangle 97.svg" alt="" className="wave-animation"/>
                <img src="Rectangle 97-rev.svg" alt="" className="wave-animation"/>
            </div>
          </div>
          <style jsx>{`
            .wave-animation {
                animation: moveWave1 6s linear infinite;
            }
            .wave-animation1 {
                animation: moveWave2 6s linear infinite;
            }
            @keyframes moveWave1 {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-80%);
                }
            }
            @keyframes moveWave2 {
                0% {
                    transform: translateX(-80%);
                }
                100% {
                    transform: translateX(0%);
                }
            }
        `}</style>
        </div>

        <div
          className="footer2 w-full sm:h-[428px] grid grid-rows-3 gap-16 sm:grid-cols-3 lg:gap-16 sm:gap-5 p-10 "
          style={{ opacity: "0.65", background: "rgba(1, 12, 38, 0.92)", fontFamily:"Roboto" }}
        >
          <div className="section1 flex flex-col gap-10">
            <div className="font-light text-white text-xl">
              IEEE NITJ STUDENT CHAPTER
            </div>
            <div className="text-white text-sm font-bold">
              Be A IEEEian! <br />
              Shaping Engineering excellence,Empowering Innovators!
            </div>
            <div className="text-base flex flex-col gap-5">
              <div className="flex gap-5">
                <img src="./location.svg" alt="" />
                <a href="">
                  DR BR AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY, JALANDHAR, PUNJAB
                </a>
              </div>
              <div className="flex gap-5">
                <img src="./mail.svg" alt="" />
                <a href="mailto:xyz@gmail.com">
                  xyz@gmail.com
                </a>
              </div>
              <div className="flex gap-5">
                <img src="tel.svg" alt="" />
                <a href="tel:+91180001235">
                  +91180001235
                </a>
              </div>
            </div>
          </div>
          <div className="section2 flex flex-col gap-10 sm:mt-0 -mt-8">
            <p className="font-bold text-2xl">Question Us</p>
            <form action="" className="flex xl:gap-20 lg:gap-10 sm:gap-5 gap-16">
              <div className="flex flex-col gap-5">
                <label htmlFor="name">Name</label>
                <label htmlFor="company">Company</label>
                <label htmlFor="position">Position</label>
                <label htmlFor="phone">Phone</label>
                <label htmlFor="email">Email</label>
              </div>
              <div className="flex flex-col gap-5">
                <input type="text" name="" id="name" className="bg-transparent border-b-2 border-[#9A9EA5]" placeholder="Enter your Name"/>
                <input type="text" name="" id="company" className="bg-transparent border-b-2 border-[#9A9EA5]" placeholder="Company Name"/>
                <select name="" id="position" className="bg-transparent border-b-2 border-[#9A9EA5]">
                  <option value="CEO" className="text-black">CEO</option>
                  <option value="Designer" className="text-black">Designer</option>
                  <option value="Manager" className="text-black">Manager</option>
                </select>
                <input type="number" name="" id="phone" className="bg-transparent border-b-2 border-[#9A9EA5]" placeholder="+91 1800 123 456"/>
                <input type="email" name="" id="email" className="bg-transparent border-b-2 border-[#9A9EA5]" placeholder="Enter your Email"/>
              </div>
            </form>
            <button className="w-3/4 bg-white p-3 rounded-xl text-black flex justify-center flex-center m-auto">
              Get Started
            </button>
          </div>
          <div className="section3 flex flex-col gap-10 lg:ml-0 md:ml-14">
            <p className="font-bold text-2xl">QUICK LINKS</p>
            <div className="flex flex-col gap-5">
              <a href="" className="flex relative w-1/2">
                About Us
                <img src="./arrow.svg" alt="" className="absolute lg:right-0 md:-right-5 -right-16"/>
              </a>
              <a href="" className="flex relative w-1/2">
                Careers
                <img src="./arrow.svg" alt="" className="absolute lg:right-0 md:-right-5 -right-16"/>
              </a>
              <a href="" className="flex relative w-1/2">
                FAQs
                <img src="./arrow.svg" alt="" className="absolute lg:right-0 md:-right-5 -right-16"/>
              </a>
              <a href="" className="flex relative w-1/2">
                Teams
                <img src="./arrow.svg" alt="" className="absolute lg:right-0 md:-right-5 -right-16"/>
              </a>
              <a href="" className="flex relative w-1/2">
                Contact Us
                <img src="./arrow.svg" alt="" className="absolute lg:right-0 md:-right-5 -right-16"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
