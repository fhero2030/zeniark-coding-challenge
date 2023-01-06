import React, { useState } from "react";
import QuestionBlock from "../../components/QuestionBlock";

type JSONResponse = {
  results: Question[];
};

const Quiz = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const questions = props.results as Question[];
  const itemLength = questions.length;

  const [currentItem, setCurrentItem] = useState(0);
  const [answers, setAnswers] = useState<QuestionWithAnswer[]>([]);
  const [score, setScore] = useState(0);

  // return <ShowResult />;

  const checkAnswer = (answer: string, correctAnswer: string) => {
    setAnswers((prevState) => [...prevState, { ...questions[currentItem], answer: answer }]);
    if (correctAnswer.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
      setScore((prevState) => prevState + 1);
    }
    setCurrentItem((prevState) => prevState + 1);
  };

  if (currentItem >= itemLength) {
    return <ShowResult questionsWithAnswers={answers} score={score} itemLength={itemLength} />;
  }

  const { category, question, correct_answer, incorrect_answers } = questions[currentItem];

  return (
    <>
      <Head>
        <title>Zeniark - Quiz</title>
        <meta property="og:title" content="Zeniark Home" key="title" />
      </Head>
      <QuestionBlock
        key={question}
        question={question}
        category={category}
        correct_answer={correct_answer}
        incorrect_answers={incorrect_answers}
        currentItem={currentItem + 1}
        itemLength={itemLength}
        checkAnswer={checkAnswer}
      />
    </>
  );
};

export default Quiz;

// Fetching data from the JSON file
import path from "path";
import { promises as fs } from "fs";

import { GetServerSideProps, InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import ShowResult from "../../components/ShowResult";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  // TODO: Queuery based on params
  // mypage.com/quiz/10?category=animals?difficulty=hard
  // const {filter: itemNumber, category, difficulty } = params

  const itemNumber = 10;

  const jsonDirectory = path.join(process.cwd(), "src/data");
  const response = await fs.readFile(jsonDirectory + "/questions.json", "utf8");
  const data: JSONResponse = await JSON.parse(response);

  // ensuring we always have data to render
  if (!data || data.results.length === 0) {
    return {
      notFound: true,
    };
  }

  const filteredData = data.results.sort(() => Math.random() - Math.random()).slice(0, itemNumber);

  return {
    props: { results: filteredData },
  };
};
