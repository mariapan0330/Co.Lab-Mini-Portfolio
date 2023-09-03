import React, { useState } from "react";

type XPCardItem = {
  role: string;
  company: string;
  dates: string;
  color: string;
  description: React.JSX.Element;
};

interface XPCardProps {
  item: XPCardItem;
}

export const Experience: React.FC = () => {
  let xpcards: XPCardItem[] = [
    {
      role: "Code Coach",
      company: "theCoderSchool Nortshore",
      dates: "January 2023 - Present",
      color: "FEF7CD",
      description: (
        <>
          - Designed engaging and personalized lesson plans to teach students
          aged 7 to 15 to code in Scratch, Python, and JavaScript, and fostered
          curiosity and logical reasoning in both one-on-one and group settings.
          <br />
          - Curated a collection of resources to streamline the setup process,
          particularly via online IDEs like Replit and CodePen.
          <br />
          - Leveraged playful logic-practicing sites like CodeWars and
          CodeCombat, and visual libraries like Python’s Pygame and JavaScript’s
          colors module so students can engage with the fun and logic of coding
          without too much overhead.
          <br />
          - Earned Employee Spotlight of the Month for April 2023 in
          recognition of my diligence, rapport, and effective teaching.
        </>
      ),
    },
    {
      role: "Small Business Owner",
      company: "LittleBirdBigIdeas",
      dates: "July 2021 - Present",
      color: "FFEBD0",
      description: (
        <>
          - Established an Etsy shop with coherent branding and consistent,
          high-quality products achieved by implementing market research.
          <br />
          - Modified products and sales in advance of holidays and popular
          culture events to prepare for changes in consumer interests.
          <br />
          - Resolved questions and concerns and handled commissions to
          achieve a seamless, friendly customer experience.
        </>
      ),
    },
    {
      role: "Software Developer",
      company: "Coding Temple",
      dates: "July 2022 - September 2022",
      color: "FDD7C4",
      description: (
        <>
          - Developed a blog web application that used Flask with SQLAlchemy to
          save user data in a PostgreSQL database and created Flask API
          endpoints which allowed authenticated users to access this data.
          <br />
          - Handled the retrieved data with React and Node.js to create an
          intuitive UI that ensured a seamless experience for users creating a
          new profile, viewing other users’ profiles and creating, editing, and
          deleting their own posts.
          <br />
          - Crafted and hosted a weather application, connecting a public
          weather API and using Flask’s Jinja Templating to achieve an elegant
          UI with effective search functionality. Hosted this project on Heroku
          and later migrated it to Netlify.
        </>
      ),
    },
    {
      role: "Public Relations Officer",
      company: "Q Soc",
      dates: "December 2019 - May 2021",
      color: "FFD2CC",
      description: (
        <>
          - Developed a distinct branding for the society recognizable across
          social media platforms, a community blog, and physical posters.
          <br />
          - Streamlined the recruitment of over 300 members, promoted 3 large
          events a week, and emailed members weekly.
          <br />
          - Managed a team working across 7 time zones dedicated to the
          production of the society’s magazine.
        </>
      ),
    },
    {
      role: "Bachelor of Arts",
      company: "Trinity College Dublin",
      dates: "August 2018 - May 2022",
      color: "FEC8BE",
      description: (
        <>
          - Graduated with second class honors, first division.
          <br />
          - Gained experience in data analysis using Python's NumPy, Pandas, and
          Matplotlib, as well as IBM's SPSS, analyzing large data sets as a part
          of various research projects.
          <br />
          - Developed soft skills including effective written and verbal
          communication, critical thinking, and networking.
        </>
      ),
    },
  ];

  return (
    // this is all part of the bio section
    <div className="h-content md:mx-20 lg:mx-80 pb-40 " id="experience">
      <div className="text-3xl font-bold md:text-5xl">
        Education & Experience
      </div>
      <div className="pt-8 md:pt-12 flex flex-col md:flex-row md:flex-wrap justify-evenly">
        {xpcards.map((item, i) => (
          <XPCard item={item} />
        ))}
      </div>
      <div id="projects" />
    </div>
  );
};

const XPCard: React.FC<XPCardProps> = ({ item }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div>
      <div
        className={`p-2 md:p-10 mx-10 my-3 md:m-4 shadow-lg rounded-md md:rounded-xl ${
          showDescription && "mx-[300px]"
        } cursor-pointer`}
        style={{ backgroundColor: `#${item.color}` }}
        onClick={() => setShowDescription((prev) => !prev)}
      >
        <div className="text-xl md:text-2xl font-bold">{item.role}</div>
        <hr className="md:my-2 border-rose-300" />
        <div className="text-lg md:text-xl">{item.company}</div>
        <div className="text-sm md:text-lg text-rose-800 italic">{item.dates}</div>
        <div className={`text-xs md:text-lg leading-5 text-left py-2 ${showDescription ? "flex" : "hidden"}`}>
          {item.description}
        </div>
        <div className="text-sm md:text-md text-rose-800/50 md:py-2 flex items-center justify-center italic">
          {showDescription ? "Read less..." : "Read more..."}
        </div>
      </div>
    </div>
  );
};
