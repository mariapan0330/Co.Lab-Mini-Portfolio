import React from "react";

type ProjectCard = {
  image?: string;
  title: string;
  live?: string;
  description: string;
  repo: string;
};

interface ProjectCardProps {
  card: ProjectCard;
}

export const Projects: React.FC = () => {
  let cards: ProjectCard[] = [
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
  return (
    <div className="h-content pb-40 mx-80">
      <div className="text-5xl font-bold md:text-7xl">Projects</div>
      <div className="md:flex md:flex-wrap justify-center mt-20">
        {cards.map((card) => (
          <ProjectCard card={card} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ card }) => {
  return (
    <div className="bg-white p-4 m-4 w-80 shadow-md">
      <div className="text-xl font-bold py-4">{card.title}</div>
      <div className="text-md">{card.description}</div>
      <div className="links my-6">
        {card.live && <a href={card.live} target="_blank" rel='noreferrer' className="bg-black text-white py-2 px-4 hover:bg-gray-500 duration-200">Live</a>}
        {card.live && card.repo && <span className="px-3"></span>}
        {card.repo && <a href={card.repo} target="_blank" rel='noreferrer' className="bg-black text-white py-2 px-4 hover:bg-gray-500 duration-200">Repo</a>}
      </div>
    </div>
  );
};
