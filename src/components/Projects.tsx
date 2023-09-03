import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

type ProjectCardDetails = {
  image?: string;
  title: string;
  live?: string;
  description: string;
  repo: string;
};

interface ProjectCardProps {
  card: ProjectCardDetails;
}

export const Projects: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);
  let cards: ProjectCardDetails[] = [
    {
      image: "personal website",
      title: "This site!",
      live: "https://maria-panagos.netlify.app/",
      description:
        "A handmade portfolio site detailing my projects and experience! Includes a working contact form that emails me when someone submits something.",
      repo: "https://github.com/mariapan0330/Personal-Website",
    },
    {
      image: "customer contact",
      title: "Customer Contact Form",
      live: "",
      description:
        "This project uses React and Node.js to create a visually appealing example of a customer contact form!",
      repo: "https://github.com/mariapan0330/customer-contact-form",
    },
    {
      image: "escape game",
      title: "Escape Game",
      live: "",
      description:
        "I love escape games, so I decided to create one as my capstone project with Coding Temple! It is a point-and-click style game and the player's data is continually saved.",
      repo: "https://github.com/mariapan0330/Escape-Game",
    },
    {
      image: "weather",
      title: "Weather Application",
      live: "https://stalwart-tiramisu-dee856.netlify.app/",
      description:
        "This working weather application pulls from the OpenWeatherAPI to bring you accurate weather data for a given city! The background image changes depending on the weather for emmersion.",
      repo: "https://github.com/mariapan0330/react-weather-app",
    },
    {
      image: "blog",
      title: "Typewriter Blog",
      live: "",
      description:
        "This is the frontend for a multi-user blog themed after typewritten notes! An authenticated user can make, edit, and delete their own posts and view other peoples' profiles.",
      repo: "https://github.com/mariapan0330/React-Social-Media",
    },
    {
      image: "phonebook",
      title: "Big Phonebook",
      live: "https://gifted-radial-rugby.glitch.me/",
      description:
        "This basic example of a phonebook allows the user to create a profile and save, edit, and delete contact information digitally.",
      repo: "https://github.com/mariapan0330/Phonebook",
    },
  ];

  const nextCard = (direction: string) => {
    direction === "forward" && setCurrentCard((prev) => (prev + 1) % 6);
    direction === "backward" && setCurrentCard((prev) => (prev - 1 + 6) % 6);
  };

  return (
    <div className="h-content md:h-[50rem] pb-40 mx-2 relative">
      <div className="text-3xl font-bold md:text-5xl">Projects</div>
      <div className="select-none flex justify-center mt-20 cursor-pointer text-3xl font-bold">
        <span
          onClick={() => nextCard("backward")}
          className="mx-16"
        >{`<<<`}</span>
        <span
          onClick={() => nextCard("forward")}
          className="mx-16"
        >{`>>>`}</span>
      </div>
      <div className="md:flex md:flex-wrap justify-center select-none">
        <ProjectCard card={cards[currentCard]} />
      </div>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ card }) => {
  const [showCard, setShowCard] = useState(true);
  const isPhone = useMediaQuery({ query: "(max-width: 1000px)" });
  let colors = ["#FFB2E0", "#72CDAA", "#4959FE", "#61BDFD", "#FECC38"];

  return (
    <div className={`${showCard ? "flex" : "hidden"}`}>
      <div
        className={`md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col m-auto my-3 md:m-0 bg-white p-4 w-80 min-h-[470px] max-h-full shadow-md transition-all duration-500`}
        onClick={() => {
          !isPhone && setShowCard((prev) => !prev);
        }}
      >
        <img
          src={require(`../assets/projects/${card.image}.png`)}
          alt={card.title}
        />
        <div className="flex-none text-xl font-bold py-4">{card.title}</div>
        <div className="flex-row grow text-md">{card.description}</div>
        <div className="flex-none links my-6 font-bold">
          {card.live && (
            <a
              href={card.live}
              target="_blank"
              rel="noreferrer"
              className="text-white py-2 px-4 border-solid border-4 rounded-sm border-white hover:border-blue-800"
              style={{
                backgroundColor: `${colors[Math.floor(Math.random() * 5)]}`,
              }}
            >
              Live
            </a>
          )}
          {card.live && card.repo && <span className="px-3"></span>}
          {card.repo && (
            <a
              href={card.repo}
              target="_blank"
              rel="noreferrer"
              className="text-white py-2 px-4 border-solid border-4 rounded-sm border-white hover:border-blue-800"
              style={{
                backgroundColor: `${colors[Math.floor(Math.random() * 5)]}`,
              }}
            >
              Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
