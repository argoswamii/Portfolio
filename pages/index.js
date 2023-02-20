import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import abhi from "../public/profile.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Abhishek</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1ugRHFdYOTSfnWdlvzMuCmRFNIxMgBK3T/view?usp=sharing"
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Abhishek Raj Goswami
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I have decent skills in DSA and web development. I have good grasp
              of various technology of web such as JavaScript, Node JS, React,
              Express.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://github.com/argoswamii">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-raj-goswami-2752811b4/">
              <BsLinkedin />
            </a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-400 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={abhi} />
          </div>
        </section>
        {/*second page*/}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">About</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have always been fascinated by technology and wanted to make a
              career in it. I gathered knowledge on various domains from many
              sources. I have developed skills in
              <span className="text-teal-500"> Web development</span> and{" "}
              <span className="text-teal-500">
                Data structure and Algorithms
              </span>
              . I joined coding blocks to improve and enhance my skills on DSA.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
          </div>
        </section>
      </main>
    </div>
  );
}
