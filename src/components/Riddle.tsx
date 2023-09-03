import React, { useState } from "react";

type RiddleObj = {
  title: string;
  question: string;
  answer: string;
};

export const Riddle: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [riddle, setRiddle] = useState<RiddleObj>({
    title: "Title1",
    question: "This is riddle #1",
    answer: "this is answer # 1",
  });
  const [userAnswer, setUserAnswer] = useState<string>("")

  const handleNewRiddle = () => {
    setShowAnswer(false);
    setRiddle({
      title: "RIDDLE 2",
      question: "THIS IS RIDDLE 2",
      answer: "THIS IS ANSWER 2",
    });
    setUserAnswer("")
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
            className="underline underline-offset-4 hover:bg-white border-4 border-transparent hover:border-4 hover:border-white duration-200"
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
                <div className="leading-6 text-md">{riddle.question}</div>
              </div>
              <div
                onClick={handleNewRiddle}
                className="text-right flex items-center bg-black px-10 py-5 text-white select-none cursor-pointer rounded-sm"
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
                    className="text-right flex items-center justify-center bg-black px-10 py-5 text-white select-none cursor-pointer rounded-sm"
                  >
                    Show Answer
                  </div>
                </>
              )}
            </div>

            {/* YOUR ANSWER */}
            <div className="flex-1 ml-5 bg-white h-content shadow-lg">
              <div className=" px-20 py-8 flex flex-col text-start justify-start">
                <div className="font-bold text-lg">Your Answer <span className="text-base font-normal">(This will not be saved )</span></div>
                {showAnswer ? userAnswer : <input value={userAnswer} onChange={(e)=>setUserAnswer(e.target.value)} className="bg-gray-200 p-5 text-md border-b border-b-2 border-gray-400"/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
