import React, { useState } from "react";

type LinksObj = {
  title: string;
  image: string;
  link?: string;
  hoverTitle: string;
};

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("maria.pan0330@gmail.com");
    setCopied(true);
  };

  let links: LinksObj[] = [
    {
      title: "@mariapan0330",
      image: "github",
      link: "https://github.com/mariapan0330",
      hoverTitle: "Opens in a new tab.",
    },
    {
      title: "@maria-panagos",
      image: "linkedin",
      link: "https://www.linkedin.com/in/maria-panagos/",
      hoverTitle: "Opens in a new tab.",
    },
    {
      title: "maria.pan0330@gmail.com",
      image: "email",
      link: "",
      hoverTitle: "Copy this to your clipboard!",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row shrink-0 bottom-0 left-0 w-full h-[350px] md:h-[300px] bg-black text-white md:px-10 lg:px-80">
      {/* ========== COLUMN 1: LINKS TO MY GITHUB, LINKEDIN, EMAIL ========== */}
      <div className="md:flex-1 my-5 md:my-0 justify-center self-center">
        {links.map((item, i) =>
          item.link ? (
            <a
              key={`contact-links-${i}`}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              title={item.hoverTitle}
              className="lg:w-1/2 text-lg py-2 md:py-4 flex items-center rounded-sm hover:bg-gray-800 duration-200"
            >
              <img
                src={require(`../assets/contact images/${item.image}.png`)}
                alt={item.title}
                className="w-auto h-8 px-4"
              />
              {item.title}
            </a>
          ) : (
            <div
              key={`contact-links-${i}`}
              title={item.hoverTitle}
              className="lg:w-1/2 text-lg py-2 md:py-4 flex flex-wrap items-center rounded-sm hover:bg-gray-800 duration-200 cursor-pointer active:bg-theme-green"
              onClick={() => {
                copyToClipboard();
              }}
            >
              <img
                src={require(`../assets/contact images/${item.image}.png`)}
                alt={item.title}
                className="w-auto h-8 px-4"
              />
              {item.title}
              {copied && (
                <span className="text-theme-green pl-3 text-base">
                  Copied to clipboard!
                </span>
              )}
            </div>
          )
        )}
      </div>

      {/* ========== COLUMN 2: LINK TO REPO FOR THIS PROJECT ========== */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex text-3xl font-bold text-center">
          Want to see how I made this site?
        </div>
        <a
          href="https://github.com/mariapan0330/Co.Lab-Mini-Portfolio"
          target="_blank"
          rel="noreferrer"
          title="Opens in new tab."
          className="flex bg-white text-black rounded-sm hover:bg-gray-400 cursor-pointer px-10 py-5 mt-5 text-xl"
        >
          View Repository
        </a>
      </div>
    </div>
  );
};
