"use client";


export default function CoverPage() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        {window.innerWidth > 625 ? (
          <div className="background w-full h-full flex ">
            <div
              className="mx-auto w-10/12 h-[98vh] rounded-tl-[65px] rounded-tr-[65px] border border-black overflow-clip"
              style={{
                background: "rgba(217, 217, 217, 0.10)",
                boxShadow:
                  "75.23px -75.23px 75.23px 0px rgba(165, 165, 165, 0.10) inset, -75.23px 75.23px 75.23px 0px rgba(255, 255, 255, 0.10)",
                backdropFilter: "blur(75.2302017211914px)",
              }}
            >
              <img
                src="/cover.svg"
                alt=""
                className="relative w-[95%] mt-10 mx-auto "
              />
              <div className="absolute top-0 overflow-clip w-full h-full ">
                <img
                  src="/Frame 2270.png"
                  alt=""
                  className="relative z-[1000] w-[88%] h-[85vh] mx-auto mt-10 bg-transparent"
                  style={{
                    fill: "#fff",
                    strokeWidth: "2.167px",
                    stroke: "rgba(190, 209, 250, 0.15)",
                    filter:
                      "drop-shadow(0px 4.334px 4.334px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4.334px 4.334px rgba(0, 0, 0, 0.25))",
                  }}
                />

                <img
                  src="/Group 60.svg"
                  alt=""
                  className="absolute left-20 top-24"
                />
                <img
                  src="/Group 61.svg"
                  alt=""
                  className="absolute right-20 top-24"
                />
                <div className="absolute bottom-24">
                  <div
                    className="mx-auto text-black text-center text-4xl w-[78%]"
                    style={{
                      textShadow: "0px 4.334px 4.334px rgba(0, 0, 0, 0.25)",
                      fontFamily: "Michroma",
                    }}
                  >
                    EMPOWERING TOMORROW’S INNOVATORS AT NIT JALANDHAR!
                  </div>
                  <div
                    className="mt-5 mx-auto text-black text-center text-xl w-[78%]"
                    style={{
                      fontFamily: "Michroma",
                    }}
                  >
                    Connect.Learn.Innovate.Lead
                  </div>

                  {/* <div
                className="mx-auto w-[28%] h-[28%]"
                style={{
                  borderRadius: "548.245px",
                  background:
                    "linear-gradient(155deg, #5C9EDB 42.85%, #21659E 52.1%, #145FD7 58.76%, #2D37A5 68.15%, #041862 84.11%)",
                  filter: "blur(24.37848472595215px)"
                }}
              ></div> */}
                  <img
                    src="/ellipse.svg"
                    alt=""
                    className="mx-auto mt-5 w-[28%] h-[28%]"
                    style={{
                      strokeWidth: "10.835px",
                      stroke: "#000",
                      backgroundBlendMode: " darken, darken",
                      zIndex: 1000,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center mx-auto">
            <img
              src="/Rectangle 89.png"
              alt=""
              className="w-[96%] h-full mt-20 mx-auto "
            />
            <div className="absolute top-0 flex flex-col justify-center items-center">
              <div
                className="mt-44 mx-auto text-black text-center text-3xl font-semibold max-w-[80%]"
                style={{
                  textShadow: "0px 4.334px 4.334px rgba(0, 0, 0, 0.25)",
                  fontFamily: "Michroma",
                }}
              >
                EMPOWERING TOMORROW’S INNOVATORS AT NIT JALANDHAR!
              </div>
              <div
                className="mt-16 mx-auto text-black text-center text-xl"
                style={{
                  fontFamily: "Michroma",
                }}
              >
                Connect.Learn.Innovate.Lead
              </div>
              <img
                src="/ellipse.svg"
                alt=""
                className="mx-auto mt-16 w-[70%] h-[70%]"
                style={{
                  strokeWidth: "10.835px",
                  stroke: "#000",
                  backgroundBlendMode: " darken, darken",
                  zIndex: 1000,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
