import React from "react";
import { HashLink } from "react-router-hash-link";

export const NavBar: React.FC = () => {
  return (
    <div className="h-20 bg-white drop-shadow-xl sticky top-0 flex justify-evenly items-center">
      {/* ITEM 1 & 2: LOGO & TITLE */}
      <HashLink to="#top" className="text-3xl font-bold flex">
        <img
          src={require("../assets/m icon.png")}
          className="h-10 px-3"
          alt="logo"
        />
        <div>Maria Panagos</div>
      </HashLink>

      {/* ITEM 3: BIO HASHLINK */}
      <HashLink to="#bio" className="text-xl">
        <div>Bio</div>
      </HashLink>

      {/* ITEM 3: PROJECTS HASHLINK */}
      <HashLink to="#projects" className="text-xl">
        <div>Projects</div>
      </HashLink>

      {/* ITEM 3: RIDDLE HASHLINK */}
      <HashLink to="#riddle" className="text-xl">
        <div>Fancy a Riddle?</div>
      </HashLink>

      {/* ITEM 3: RESUME IN NEW TAB */}
      <div className="text-xl text-white">
        <a target='_blank' rel='noreferrer' href={require("../assets/Maria Panagos Resume for CoLab.pdf")} className="bg-black px-10 py-3 flex items-center jutify-center font-bold">Resume</a>
      </div>
    </div>
  );
};
