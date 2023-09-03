import React, { useEffect, useState } from "react";
import { API_KEY } from './env.js'

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

  const handleNewRiddle = () => {
    setShowAnswer(false);
    fetchNewRiddle()
    setUserAnswer("");
  };

  useEffect(()=> {
    fetchNewRiddle()
  }, [])

  const fetchNewRiddle = () => {
    const apiURL = "https://api.api-ninjas.com/v1/riddles";
    const apiKey = API_KEY;

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
      <div className="h-screen mx-80">
        <div className="mt-0 text-3xl font-bold md:text-5xl">
          Fancy a Riddle?
        </div>
        <div className="text-lg md:text-xl py-10 mx-80">
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
          . <br />
          Can you guess the answer?
        </div>

        <div className="flex flex-col">
          {/* RIDDLE */}
          <div className="bg-white h-content shadow-lg py-10 px-36 text-start">
            <div className="flex justify-center items-center">
              <div className="flex-1">
                <div className="font-bold text-lg">{riddle.title}</div>
                <div className="leading-6 text-md pr-16">{riddle.question}</div>
              </div>
              <div
                onClick={handleNewRiddle}
                className="text-right flex items-center bg-black px-10 py-5 text-white select-none cursor-pointer rounded-sm hover:bg-gray-500 duration-200"
              >
                New Riddle
              </div>
            </div>
          </div>
          <div className="flex mt-10">
            {/* CORRECT ANSWER */}
            <div
              className={`flex-1 mr-5 bg-white h-content shadow-lg flex items-center ${
                !showAnswer && "justify-center"
              }`}
            >
              {showAnswer ? (
                <div className=" px-20 py-8 flex flex-col text-start justify-start">
                  <div className="font-bold text-lg">Answer</div>
                  <div className="leading-6 text-md">{riddle.answer}</div>
                </div>
              ) : (
                <>
                  <div
                    onClick={() => setShowAnswer(true)}
                    className="text-right flex items-center justify-center bg-black px-10 py-5 text-white select-none cursor-pointer rounded-sm hover:bg-gray-500 duration-200"
                  >
                    Show Answer
                  </div>
                </>
              )}
            </div>

            {/* YOUR ANSWER */}
            <div className="flex-1 ml-5 bg-white h-content shadow-lg">
              <div className=" px-20 py-8 flex flex-col text-start justify-start">
                <div className="font-bold text-lg">
                  Your Answer{" "}
                  <span className="text-base font-normal">
                    (This will not be saved, it's just for your reference!)
                  </span>
                </div>
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
