import React from "react";

import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

type Props = {
  questionWithAnswer: QuestionWithAnswer;
  item: number;
};

const ItemResultCard = (props: Props) => {
  const { questionWithAnswer, item } = props;
  const { question, answer, correct_answer } = questionWithAnswer;

  const correct = answer.toLowerCase() === correct_answer.toLowerCase();

  return (
    <div className="grid grid-cols-12 w-11/12 py-6 grid-rows-2 border-b-2 border-dashed">
      <p className="col-span-1 text-[#9D9D9D] text-lg">{item}.</p>

      <div className="col-span-9 row-span-2 flex flex-col justify-between">
        <p>{question}</p>
        <p className="text-[#A5A5A5] italic">
          The correct anwer is{" "}
          <span
            className={`font-semibold ${
              correct_answer == "True" ? "text-[#4FBD1b]" : "text-[#FF4d00]"
            }`}
          >
            {correct_answer}
          </span>
          . You answered{" "}
          <span className={`${answer == "True" ? "text-[#4FBD1b]" : "text-[#FF4d00]"}`}>
            {answer}
          </span>
          .
        </p>
      </div>

      <div
        className={`col-span-2 row-span-2 flex items-center justify-center text-2xl ${
          correct ? "text-correct" : "text-wrong"
        }`}
      >
        {correct ? <AiOutlineCheck /> : <RxCross1 />}
      </div>
    </div>
  );
};

export default ItemResultCard;
