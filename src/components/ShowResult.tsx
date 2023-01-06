import React from "react";
import Image from "next/image";

import Container from "../layouts/Container";
import ItemResultCard from "./ItemResultCard";
import { useRouter } from "next/router";

type Props = {
  itemLength: number;
  score: number;
  questionsWithAnswers: QuestionWithAnswer[];
};

const ShowResult = (props: Props) => {
  const { questionsWithAnswers, score, itemLength } = props;

  const router = useRouter();

  return (
    <Container className="flex flex-col items-center py-5">
      <div className="flex items-center px-7 w-full mb-7">
        <Image src={"/images/logo.png"} width={60} height={65} alt="Zeniark Icon Logo" />
        <h1 className="flex-1 text-center text-3xl font-semibold">Final Results</h1>
      </div>
      <div className="py-16 px-36 border-y-2 w-11/12 flex flex-col items-center">
        <p className="text-5xl font-semibold mb-5">
          {score}/{itemLength}
        </p>
        <p className="text-2xl font-medium">Your Score</p>
      </div>
      {questionsWithAnswers.map((questionWithAnswer, i) => (
        <ItemResultCard questionWithAnswer={questionWithAnswer} key={i} item={i + 1} />
      ))}

      <button
        onClick={() => {
          router.reload();
        }}
        className="underline underline-offset-[.75rem] text-4xl text-primary font-semibold hover:text-sky-700 transition-all delay-100 my-8"
      >
        PLAY AGAIN
      </button>
    </Container>
  );
};

export default ShowResult;
