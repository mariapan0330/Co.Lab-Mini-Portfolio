import React from "react";

export const TechStack: React.FC = () => {
  let stack: string[] = [
    "Bootstrap",
    "CSS",
    "Django",
    "ExpressJS",
    "Flask",
    "Git",
    "GitHub",
    "HTML",
    "Java",
    "JavaScript",
    "JSON",
    "Netlify",
    "NodeJS",
    "Nodemailer",
    "NoSQL",
    "PostgreSQL",
    "React",
    "SQLAlchemy",
    "Tailwind",
    "Typescript",
    "VS Code",
  ];
  return (
      <div className=" mb-60 flex flex-col items-center">
        <div className="text-5xl font-bold md:text-7xl">Tech Stack</div>
        <div className="pt-10 flex flex-wrap justify-center items-center w-4/5 h-36">
          {stack.map((item, i) => (
            <img
              key={`stack-${i}`}
              src={require(`../assets/tech stack/${item.toLowerCase()}.png`)}
              className="h-20 p-3 md:h-36 md:p-6"
              alt={item}
            />
          ))}
        </div>
      </div>
  );
};
