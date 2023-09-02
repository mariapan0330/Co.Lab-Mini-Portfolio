import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

type LinksInfo = {
  name: string;
  link: string;
};

export const NavBar: React.FC = () => {
  let links: LinksInfo[] = [
    { name: "Bio", link: "#bio" },
    { name: "Projects", link: "#projects" },
    { name: "Fancy a Riddle?", link: "#riddle" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="h-20 bg-white drop-shadow-xl sticky top-0 z-auto px-0 md:px-3 lg:px-40">
      <div className="flex">
        {/* ITEM 1 & 2: LOGO & TITLE */}
        <HashLink
          to="#top"
          className="text-3xl font-bold flex items-center w-full py-4 md:pb-2 md:pt-0"
        >
          <img
            src={require("../assets/m icon.png")}
            className="h-10 px-3"
            alt="logo"
          />
          <div>Maria Panagos</div>
        </HashLink>

        {/* SMALL SCREENS: menu button */}
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="text-3xl absolute right-8 top-5 md:hidden"
        >
          <img src={require("../assets/Menu Btn.png")} className="w-8" alt="" />
        </div>

        {/* ITEMS 3,4,5: Bio, Projects, Riddle */}
        <ul
          className={`z-[-1] w-full absolute md:static md:flex md:items-center md:justify-evenly transition-all duration-200 ease-in ${
            open ? "top-20" : "top-[-295px]"
          }`}
        >
          {links.map((link, i) => (
            <li
              key={`navlink-${i}`}
              className="text-xl h-20 pt-5 bg-gray-800 text-white md:text-black md:bg-white"
            >
              <HashLink
                to={link.link}
                className="lg:hover:text-gray-400 cursor-pointer duration-200"
              >
                {link.name}
              </HashLink>
            </li>
          ))}

          {/* ITEM 3: RESUME IN NEW TAB */}
          <div className="text-xl text-white">
            <a
              target="_blank"
              rel="noreferrer"
              href={require("../assets/Maria Panagos Resume for CoLab.pdf")}
              className="bg-black px-10 py-3 flex items-center justify-center font-bold"
            >
              Resume
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};
