import React, { useEffect, useState } from "react";

type RiddleObj = {
  title: string;
  question: string;
  answer: string;
};

export const Riddle: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [riddle, setRiddle] = useState<RiddleObj>({
    title: "Title loading...",
    question: "Riddle loading...",
    answer: "Answer Loading...",
  });
  const [userAnswer, setUserAnswer] = useState<string>("");

  // WHEN NEW RIDDLE BUTTON CLICKED:
  const handleNewRiddle = () => {
    setShowAnswer(false);
    fetchNewRiddle();
    setUserAnswer("");
  };

  // ON FIRST LOAD IN, FETCH A NEW RIDDLE:
  useEffect(() => {
    fetchNewRiddle();
  }, []);

  const fetchNewRiddle = () => {
    const apiURL = "https://api.api-ninjas.com/v1/riddles";
    const apiKey = process.env.API_KEY as string;

    fetch(apiURL, {
      headers: {
        "X-Api-Key": apiKey,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed`);
        }
        return res.json();
      })
      .then((resData) => {
        setRiddle(resData[0]);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <>
      <div id="riddle" className="pb-36"></div>
      <div className="h-content pb-10 md:pb-36 mx-10 md:mx-20 lg:mx-80 flex flex-col items-center">
        {/*========== TITLE AND SUBTITLE ==========*/}
        <div className="mt-0 text-3xl font-bold md:text-5xl">
          Fancy a Riddle?
        </div>
        <div className="text-lg md:text-xl py-10 md:w-4/5 lg:w-1/2">
          I'm a huge fan of puzzle games, particularly lateral thinking puzzles!
          Here's something that comes close - a randomly generated riddle from
          the{" "}
          <a
            href="https://api-ninjas.com/api/riddles"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:bg-white border-4 border-transparent hover:border-4 hover:border-white hover:shadow-md duration-200"
          >
            Riddle API
          </a>
          .<br />
          <span className="font-bold">Can you guess the answer?</span>
        </div>

        {/*========== RENDER RIDDLE ==========*/}
        <div className="flex flex-col m-4 md:m-0">
          <div className="bg-white h-content shadow-lg p-10 lg:px-16 text-start">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="md:flex-1">
                <div className="font-bold text-lg">{riddle.title}</div>
                <div className="leading-6 text-md pr-16 duration-500">
                  {riddle.question}
                </div>
              </div>
              <div
                onClick={handleNewRiddle}
                className="text-right flex items-center bg-black p-5 mt-5 md:p-5 md:px-10 text-white select-none cursor-pointer rounded-sm hover:bg-gray-500 duration-200"
              >
                New Riddle
              </div>
            </div>
          </div>

          {/*========== CORRECT ANSWER & YOUR ANSWER ==========*/}
          {/* ON LARGE SCREEN, MAKE IT ALL IN ONE ROW */}
          {/* ON SMALL SCREEN, MAKE IT A COLUMN */}
          <div className="flex flex-col md:flex-row mt-5 md:mt-10">
            {/*========== CORRECT ANSWER ==========*/}
            <div
              className={`md:flex-1 md:mr-5 bg-white h-content shadow-lg flex items-center ${
                !showAnswer && "justify-center"
              }`}
            >
              {showAnswer ? (
                // IF YOU HAVE REVEALED THE ANSWER:
                <div className="p-10 md:px-16 flex flex-col text-start justify-start">
                  <div className="font-bold text-lg">Answer</div>
                  <div className="leading-6 text-md">{riddle.answer}</div>
                </div>
              ) : (
                // GIVE OPTION TO SHOW THE ANSWER WHEN ANSWER IS HIDDEN
                <>
                  <div
                    onClick={() => setShowAnswer(true)}
                    className="text-right flex items-center justify-center bg-black my-4 px-8 py-4 md:px-10 md:py-5 text-white select-none cursor-pointer rounded-sm hover:bg-gray-500 duration-200"
                  >
                    Show Answer
                  </div>
                </>
              )}
            </div>

            {/*========== YOUR ANSWER ==========*/}
            <div className="flex-1 mt-4 md:mt-0 md:ml-5 bg-white h-content shadow-lg">
              <div className="p-10 md:px-16 flex flex-col text-start justify-start">
                <div className="font-bold text-lg">
                  Your Answer{" "}
                  <span className="text-base font-normal">
                    (This will not be saved, it's just for your reference!)
                  </span>
                </div>

                {/* Allows you to type a response until you click Show Answer */}
                {/* at which point it prints out what you said & you can't edit it */}
                {showAnswer ? (
                  userAnswer
                ) : (
                  <input
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="bg-gray-200 p-5 text-md border-b border-b-2 border-gray-400"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
