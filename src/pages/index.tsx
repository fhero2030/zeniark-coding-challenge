import Image from "next/image";
import Container from "../layouts/Container";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Zeniark - Home</title>
        <meta property="og:title" content="Zeniark Home" key="title" />
      </Head>
      <Container className="p-12 md:p-28 flex flex-col justify-center items-center gap-10">
        <Image src={"/images/zeniark-logo.png"} width={344} height={91} alt="Zeniark Logo" />

        <div>
          <h1 className="font-semibold text-center text-2xl md:text-4xl leading-[3.25rem]">
            Welcome to the Trivia Challenge!
          </h1>
          <p className="md:text-[1.375rem] leading-8 text-center mb-10">
            You will be presented with 10 True or False questions.
          </p>

          <p className="text-2xl md:text-4xl text-center text-white md:px-20 py-4 rounded-2xl bg-primary font-medium">
            Can you score 10/10?
          </p>
        </div>

        <button
          onClick={() => {
            router.push("/quiz/10/?difficulty=default");
          }}
          className="underline underline-offset-[.75rem] text-4xl text-primary font-semibold hover:text-sky-700 transition-all delay-100"
        >
          LET&apos;S START!
        </button>
      </Container>
    </>
  );
}
