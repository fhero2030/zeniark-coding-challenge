import React, { useEffect, useState } from "react";

import Image from "next/image";

import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import Container from "../layouts/Container";

type Props = {
  question: string;
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  itemLength: number;
  currentItem: number;
  checkAnswer: (answer: string, correctAnswers: string) => void;
};

const QuestionBlock = (props: Props) => {
  const { question, category, itemLength, currentItem, checkAnswer, correct_answer } = props;
  const [questionLabel, setQuestionLabel] = useState("");

  // Manipulate the function into useEffect in order not to trigger ReferenceError to document
  useEffect(() => {
    //https://stackoverflow.com/questions/5796718/html-entity-decode
    const span = document.createElement("span");

    const newText = question.replace(/&[#A-Za-z0-9]+;/gi, (entity, position, text) => {
      span.innerHTML = entity;
      return span.innerText;
    });

    setQuestionLabel(newText);
  }, [question]);

  return (
    <Container className="flex flex-col items-center py-5">
      {/* Quiz Header */}
      <div className="flex justify-between items-center px-7 w-full mb-4 md:mb-7">
        <div className="flex items-center gap-6">
          <Image src={"/images/logo.png"} width={60} height={65} alt="Zeniark Icon Logo" />
          <p className="font-semibold lg:text-2xl">Category: {category}</p>
        </div>

        <p className="self-end text-sm md:text-xl font-medium">
          {currentItem} of {itemLength}
        </p>
      </div>
      {/* Quiz Question */}
      <div className="py-36 px-16 border-y-2 w-11/12">
        <h1 className="text-3xl md:text-5xl text-center">{questionLabel}</h1>
      </div>

      {/* Quiz Buttons */}
      <div className="flex justify-center gap-12 pt-12 pb-7">
        <button
          onClick={() => {
            checkAnswer("True", correct_answer);
          }}
          className=" flex justify-evenly items-center text-white bg-correct text-xl md:text-3xl min-w-[6rem] min-h-[3rem] md:min-w-[10rem] md:min-h-[4rem] rounded-lg"
        >
          <AiOutlineCheck /> True
        </button>
        <button
          onClick={() => {
            checkAnswer("False", correct_answer);
          }}
          className="flex justify-evenly items-center text-white bg-wrong text-xl md:text-3xl min-w-[6rem] min-h-[3rem] md:min-w-[10rem] md:min-h-[4rem] rounded-lg"
        >
          <RxCross1 /> False
        </button>
      </div>
    </Container>
  );
};

export default QuestionBlock;
