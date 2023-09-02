import React from "react";

export const Landing: React.FC = () => {
  return (
    <div className="h-screen mx-auto flex flex-col justify-center items-center px-8 lg:px-0" id="landing">
      <div className="text-3xl font-bold lg:text-7xl">Results-driven full stack developer</div>
      <div className="text-lg lg:text-2xl py-10">with a strong foundation in psychology and statistics, transitioning into the field fo software development</div>
      <div className="text-xl lg:text-2xl font-bold text-white">
        <a target="_blank" rel='noreferrer' href={require("../assets/Maria Panagos Resume for CoLab.pdf")} className="w-30 h-16 lg:w-48 lg:h-20 bg-black px-10 py-3 flex items-center justify-center">Resume</a>
      </div>
      <img src={require('../assets/landing_images.png')} alt="My hobbies and me" className="hidden md:flex lg:h-1/5 lg:w-auto my-20" />
    </div>
  );
};
