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
  nextCard: Function;
}

export const Projects: React.FC = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 1000px)" });
  const [currentCard, setCurrentCard] = useState<number>(0);
  let cards: ProjectCardDetails[] = [
    {
      image: "dance off",
      title: "Multiplayer Dance Party Game",
      live: "",
      description:
        "This is a mulitplayer game made using RuneSDK for Rune's Game Jam 2023 in collaboration with a small team!",
      repo: "https://github.com/JackCasica/rune-dance-party",
    },
    {
      image: "personal website",
      title: "Portfolio Site",
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
    <div className="h-content md:h-content pb-10 mx-2 relative">
      <div className="text-3xl font-bold md:text-5xl">Projects</div>
      <div className="md:flex justify-center select-none">
        {isPhone ? (
          <ProjectCardSmall card={cards[currentCard]} nextCard={nextCard} />
        ) : (
          <ProjectCardLarge card={cards[currentCard]} nextCard={nextCard} />
        )}
      </div>
    </div>
  );
};

const ProjectCardSmall: React.FC<ProjectCardProps> = ({ card, nextCard }) => {
  return (
    <div>
      <div className="bg-theme-green text-white rounded-sm select-none flex justify-center mt-10 cursor-pointer text-3xl font-bold">
        <span
          onClick={() => nextCard("backward")}
          className="mx-16"
        >{`<<<`}</span>
        <span
          onClick={() => nextCard("forward")}
          className="mx-16"
        >{`>>>`}</span>
      </div>
      <div
        className={`flex flex-col bg-white p-4 w-content min-h-[470px] max-h-full shadow-md transition-all duration-500`}
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
              className="text-white py-2 px-4 bg-theme-light-blue rounded-sm hover:bg-theme-yellow"
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
              className="text-white py-2 px-4 bg-theme-dark-blue rounded-sm hover:bg-theme-green"
            >
              Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCardLarge: React.FC<ProjectCardProps> = ({ card, nextCard }) => {
  return (
    <div className="flex justify-content items-center">
      <span
        onClick={() => nextCard("backward")}
        className="px-10 mx-4 bg-theme-light-blue shadow-lg hover:bg-theme-pink rounded-sm h-1/2 flex items-center cursor-pointer"
      >{`<<<`}</span>
      <div
        className={`flex flex-col rounded-md mt-10 bg-white w-[65rem] min-h-[470px] max-h-full shadow-md transition-all duration-500`}
      >
        <img
          src={require(`../assets/projects/${card.image}.png`)}
          alt={card.title}
          className="rounded-t-md"
        />
        <div className="flex justify-center items-center">
          <div className="flex-1">
            <div className="flex-none text-xl font-bold py-4 px-20 text-left">
              {card.title}
            </div>
            <div className="grow text-md pb-8 px-20 text-left">
              {card.description}
            </div>
          </div>

          {/* SOME CARDS DON'T HAVE LIVE LINKS. IF THEY DO, RENDER IT NEXT TO REPO LINK (all have repos): */}
          {card.live && (
            <a
              href={card.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center bg-black text-white px-10 py-4 h-1/2 mr-20 hover:bg-gray-500 duration-200"
            >
              Live
            </a>
          )}
          {card.repo && (
            <a
              href={card.repo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center bg-black text-white px-10 py-4 h-1/2 mr-20 hover:bg-gray-500 duration-200"
            >
              Repo
            </a>
          )}
        </div>
      </div>
      <span
        onClick={() => nextCard("forward")}
        className="px-10 mx-4 bg-theme-green shadow-lg hover:bg-theme-pink rounded-sm h-1/2 flex items-center cursor-pointer"
      >{`>>>`}</span>
    </div>
  );
};
