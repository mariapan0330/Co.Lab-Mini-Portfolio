import React from "react";

export const Landing: React.FC = () => {
  return (
    <div
      className="h-content mx-auto flex justify-start items-start px-10 md:px-20"
      id="landing"
    >
      {/* On small devices, put the rotating gradient go behind the hero text. On large screens it'll go in the left column */}
      {/* <div className="max-sm:absolute max-sm:top-1/2 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 md:static md:flex-1"> */}
      <div className="max-sm:w-screen overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex-1">
        {/* ===== ROTATING GRADIENT GRAPHIC ===== */}
        <img
          src={require("../assets/small gradient1.png")}
          alt="animated gradient rotating in a slow circle"
          className="select-none w-screen animate-[spin_4s_linear_infinite]"
        />
      </div>
      <div className="z-10 md:flex-1 lg:py-[8rem] md:py-0">
        {/* ===== HERO TEXT ===== */}
        <div className=" text-5xl md:text-7xl font-[Poppins] font-bold">
          Results-driven full stack developer
        </div>
        {/* ----- SUBTITLE ----- */}
        <div className="z-10 text-lg md:text-2xl py-10">
          with a strong foundation in psychology and statistics, transitioning
          into the field of software development
        </div>

        <div className="text-xl md:text-2xl font-bold text-white flex justify-center">
          <a
            target="_blank"
            rel="noreferrer"
            href={require("../assets/Maria Panagos Resume for CoLab.pdf")}
            // on small screen, hover turns the button gray. On large screen it turns the button transparent with white border & saturated bg.
            className="
            w-30 h-16 lg:w-48 lg:h-20 px-10 py-3 
            flex items-center justify-center 
            border-4 border-black shadow-none
            bg-black text-white
            max-sm:hover:bg-gray-500 max-sm:hover:text-white max-sm:hover:border-gray-500
            hover:text-black hover:bg-transparent hover:backdrop-saturate-200 hover:border-white hover:shadow-lg 
            duration-200
            "
          >
            Résumé
          </a>
        </div>

        {/* <img
          src={require("../assets/landing_images.png")}
          alt="My hobbies and me"
          className="hidden md:flex md:w-fit lg:h-1/5 my-20"
          id="landingImage"
        /> */}
      </div>
      <div id="bio" />
    </div>
  );
};
