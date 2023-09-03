import React from "react";

type XPCard = {
  role: string;
  company: string;
  dates: string;
  description?: string;
};

export const Experience: React.FC = () => {
  let xpcards: XPCard[] = [
    {
      role: "Code Coach",
      company: "theCoderSchool Nortshore",
      dates: "January 2023 - Present",
    },
    {
      role: "Software Developer",
      company: "Coding Temple",
      dates: "July 2022 - September 2022",
    },
    {
      role: "Small Business Owner",
      company: "LittleBirdBigIdeas",
      dates: "July 2021 - Present",
    },
    {
      role: "Public Relations Officer",
      company: "Q Soc",
      dates: "December 2019 - May 2021",
    },
    {
      role: "Bachelor of Arts",
      company: "Trinity College Dublin",
      dates: "August 2018 - May 2022",
    },
  ];

  return (
    // this is all part of the bio section
    <div className="h-content md:mx-60 pb-20 " id="experience">
      <div className="text-5xl font-bold md:text-7xl">Education & Experience</div>
      <div className="pt-8 md:pt-12 flex flex-col md:flex-row md:flex-wrap justify-evenly">
        {xpcards.map((item, i) => (
          <div className="bg-rose-200/60 mix-blend-multiply p-10 m-4 shadow-lg rounded-xl">
            <div className="text-2xl font-bold">{item.role}</div>
            <hr className="my-2 border-rose-300"/>
            <div className="text-xl">{item.company}</div>
            <div className="">{item.dates}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
