import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { HashLink } from "react-router-hash-link";

type LinksInfo = {
  name: string;
  link: string;
  color: string;
};

interface NavLinkProps {
  link: LinksInfo;
}

export const NavBar: React.FC = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 1000px)" });
  let [open, setOpen] = useState(false);

  let links: LinksInfo[] = [
    { name: "Bio", link: "#bio", color: "#72CDAA" },
    { name: "Projects", link: "#projects", color: "#FECC38" },
    { name: "Fancy a Riddle?", link: "#riddle", color: "#FFB2E0" },
  ];

  return (
    <div className="max-w-screen h-16 md:h-20 bg-white drop-shadow-xl sticky top-0 z-50 px-0 md:px-3 lg:px-40">
      <div className="flex">
        {/* ITEM 1 & 2: LOGO & TITLE */}
        <HashLink
          to="#top"
          className="flex-1 text-xl md:text-3xl font-bold font-[Poppins] flex items-center w-full py-4 md:pb-2 md:pt-0"
        >
          <img
            src={require("../assets/m icon.png")}
            className="h-6 md:h-10 px-2"
            alt="logo"
          />
          <div>
            Maria<span className="text-transparent">j</span>Panagos
          </div>
        </HashLink>

        {/* SMALL SCREENS: menu button */}
        {isPhone && (
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="absolute right-8 top-5 md:hidden"
          >
            <img
              src={require("../assets/Menu Btn.png")}
              className="w-6"
              alt=""
            />
          </div>
        )}

        {/* ITEMS 3,4,5: Bio, Projects, Riddle */}
        <ul
          className={`z-10 w-full absolute md:static md:flex md:items-center md:justify-end transition-all duration-200 ease-in ${
            open ? "top-20" : "top-[-300px]"
          }`}
        >
          {links.map((link, i) => (
            <div key={`navlink-${i}`}>
              <NavLink link={link} />
            </div>
          ))}

          {/* ITEM 3: RESUME IN NEW TAB */}
          <div className="text-xl text-white">
            <a
              target="_blank"
              rel="noreferrer"
              href={require("../assets/Maria Panagos Resume for CoLab.pdf")}
              className="bg-black hover:bg-theme-dark-blue duration-200 px-10 py-3 flex items-center justify-center font-bold"
            >
              View Résumé
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  let [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <>
      <li
        // in small screen, items are gray bg; in md/lg screens, items are white bg
        className="navLink z-0 text-xl bg-gray-200 md:bg-white md:text-black "
        style={isLinkHovered ? { backgroundColor: link.color } : { backgroundColor: "white" }}
        onMouseEnter={() => {
          setIsLinkHovered(true);
        }}
        onMouseLeave={() => {
          setIsLinkHovered(false);
        }}
      >
        <HashLink
          to={link.link}
          className={`leading-none h-20 md:flex md:items-center md:justify-center md:px-8 cursor-pointer duration-200`}
        >
          {link.name}
        </HashLink>
      </li>
    </>
  );
};
