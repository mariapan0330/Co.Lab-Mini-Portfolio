import React from "react";

type StackItems = {
    name: string;
    color: number;
}

export const TechStack: React.FC = () => {
  let stack: StackItems[] = [
    {name:"Bootstrap", color:100},
    {name:"CSS", color:100},
    {name:"Django", color:100},
    {name:"ExpressJS", color:200},
    {name:"Flask", color:200},
    {name:"Git", color:200},
    {name:"GitHub", color:300},
    {name:"HTML", color:300},
    {name:"Java", color:300},
    {name:"JavaScript", color:400},
    {name:"JSON", color:400},
    {name:"Netlify", color:400},
    {name:"NodeJS", color:500},
    {name:"Nodemailer", color:500},
    {name:"NoSQL", color:500},
    {name:"PostgreSQL", color:600},
    {name:"React", color:600},
    {name:"SQLAlchemy", color:600},
    {name:"Tailwind", color:700},
    {name:"Typescript", color:700},
    {name:"VS Code", color:700},
  ];
  return (
      <div className="mb-28 md:mb-48 flex flex-col items-center">
        <div className="text-5xl font-bold md:text-7xl">Tech Stack</div>
        <div className="pt-10 flex flex-wrap justify-center items-center w-4/5">
          {stack.map((item, i) => (
            <img
              key={`stack-${i}`}
              src={require(`../assets/tech stack/${item.name.toLowerCase()}.png`)}
              className={`h-20 p-3 md:h-36 md:p-6 rounded-lg duration-200 hover:bg-white hover:shadow-xl`}
              alt={item.name}
            />
          ))}
        </div>
      </div>
  );
};
