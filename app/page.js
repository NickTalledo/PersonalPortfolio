"use client";
import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail, BiLogoGoogle } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { DiCode } from "react-icons/di";
import { LiaSchoolSolid } from "react-icons/lia";
import { MdComputer, MdOutlineSecurity } from "react-icons/md";
import { DiJavascript1 } from "react-icons/di";
import { CgWebsite } from "react-icons/cg";
import { SiHackaday } from "react-icons/si";
import { useState, useEffect } from "react";
import Image from "next/image";
import Memodified from "../public/Me-modified.png";
import HFL2 from "../public/HFL2.png";
import MovieBox from "../public/MovieBox.png";
import Bitcoin from "../public/Bitcoin.png";
import Flexfusion from "../public/FlexFusion.png";
import MindfulMeadows from "../public/MindfulMeadows.png";
import JediCreator from "../public/JediCreator.png";
import Frontend from "../public/Frontend.png";
import Backend from "../public/Backend.png";
import About from "../public/About.png";
import Folder from "../public/Folder.png";
import Notebook from "../public/Notebook.png";
import Tools from "../public/Tools.png";
import File from "../public/File.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const showButtonThreshold = 200;
    setShowBackToTop(currentScrollY > showButtonThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-mono text-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&width=435&lines=Developed+by+Nick+Talledo;Full+Stack+Development;Computer+Science+Undergraduate;Software+Developer;Web+Designer"
                alt="Typing SVG"
              />
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://docs.google.com/document/d/1nYqvThsKoryofRrFBxEiW_6hAOWJ43oR/edit?usp=sharing&ouid=113622204317666744949&rtpof=true&sd=true"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nicolas Talledo
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Software Engineer interested in building web-applications.
              Knowledgeable in both Frontend and Backend!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/NickTalledo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nicolas-talledo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a href="mailto:nicolastalledo13@gmail.com">
                <BiLogoGmail />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={Memodified} alt="Me" priority={true} />
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="flex items-center gap-2">
              <Image src={About} width={100} height={80} alt="About" />
              <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>{" "}
            </div>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I began my college journey with the ambition of pursuing
              Electrical Engineering. However, I soon discovered that it
              wasn&apos;t the path that resonated with my passions and
              aspirations. Determined to find my true calling, I delved into the
              world of coding and{" "}
              <span className="text-teal-500"> Web Development </span> through
              online courses. What started as a curiosity soon transformed into
              a deep passion for
              <span className="text-teal-500"> Computer Science</span>. The
              process of learning and exploring new concepts was exhilarating,
              and I eventually made the switch to focus on this dynamic field.{" "}
              <br />
              <br />
              <span className="text-teal-500"> Web Development </span> captured
              my interest like no other. With an insatiable appetite for
              knowledge, I immersed myself in both{" "}
              <span className="text-teal-500"> Frontend </span> and{" "}
              <span className="text-teal-500"> Backend </span> technologies,
              eager to gain a comprehensive understanding of the entire
              development process. This journey has been both rewarding and
              challenging, as I strive to build a diverse skill set and create
              captivating digital experiences.
              <br />
              <br />
              As I continue to grow and evolve in the world of{" "}
              <span className="text-teal-500"> Web Development</span>, I am
              thrilled to embark on new projects and collaborations that push
              the boundaries of what is possible in the digital realm. I am
              passionate about creating innovative solutions and contributing to
              the ever-evolving landscape of technology. With each line of code
              I write, I&apos;m excited to be part of shaping the future of the
              web and beyond.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-teal-500 flex-1 transition-transform transform hover:scale-105">
              <Image src={Frontend} width={100} height={100} alt="Frontend" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white  ">
                Frontend Development
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-yellow-300">
                Skills
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">JavaScript</p>
              <p className="text-gray-800 py-1 dark:text-white">HTML</p>
              <p className="text-gray-800 py-1 dark:text-white">CSS</p>
              <p className="text-gray-800 py-1 dark:text-white">
                React.js & Next.js
              </p>
              <p className="text-gray-800 py-1 dark:text-white">
                Bootstrap & Tailwind
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-500 flex-1 transition-transform transform hover:scale-105">
              <Image src={Backend} width={100} height={100} alt="Backend" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Backend Development
              </h3>
              <p className="py-2 dark:text-white">
                Building efficient and scalable server-side systems to power
                seamless web applications.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-yellow-300">
                Skills
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">
                Express.js & Node.js
              </p>
              <p className="text-gray-800 py-1 dark:text-white">PostgresSQL</p>
              <p className="text-gray-800 py-1 dark:text-white">Supabase</p>
              <p className="text-gray-800 py-1 dark:text-white">Python</p>
              <p className="text-gray-800 py-1 dark:text-white">C++</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>{" "}
              <Image src={Folder} width={100} height={80} alt="Folder" />
            </div>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Throughout my college journey, I have passionately pursued{" "}
              <span className="text-teal-500"> Web Development</span>, creating
              a diverse range of{" "}
              <span className="text-teal-500"> projects </span> that showcase my
              skills and dedication. As I go on into my software development
              career, I am proud of the{" "}
              <span className="text-teal-500"> web applications </span> and{" "}
              <span className="text-teal-500"> websites </span> I have crafted,
              each <span className="text-teal-500"> project </span> reflecting
              my growth and expertise in this dynamic field.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Looking forward, I am eager to continue honing my craft and taking
              on new challenges to make a lasting impact in the world of{" "}
              <span className="text-teal-500"> Web Development</span>.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            <div className="rounded-lg basis-1/3 flex-1">
              <a href="https://mindfulmeadows.netlify.app/" target="_blank">
                <Image
                  className="rounded-lg object-cover border-2 border-teal-600 transition-transform transform hover:scale-105"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={MindfulMeadows}
                  alt="MindfulMeadows"
                />
              </a>
            </div>
            <div className="rounded-lg basis-1/3 flex-1 ">
              <a href="https://www.hangoverfl.com/" target="_blank">
                <Image
                  className="rounded-lg object-cover border-2 border-teal-600 transition-transform transform hover:scale-105"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={HFL2}
                  alt="HFL2"
                />
              </a>
            </div>

            <div className="rounded-lg basis-1/3 flex-1 ">
              <a href="https://flexfusion.xyz/" target="_blank">
                <Image
                  className="rounded-lg object-cover border-2 border-teal-600 transition-transform transform hover:scale-105"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={Flexfusion}
                  alt="Flexfusion"
                />
              </a>
            </div>
            <div className="rounded-lg basis-1/3 flex-1 ">
              <a
                href="https://github.com/NickTalledo/TTP-Project1"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover border-2 border-teal-600 transition-transform transform hover:scale-105"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={MovieBox}
                  alt="MovieBox"
                />
              </a>
            </div>

            <div className="rounded-lg basis-1/3 flex-1">
              <a
                href="https://github.com/NickTalledo/JediCreator"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover border-2 border-teal-600 transition-transform transform hover:scale-105"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={JediCreator}
                  alt="JediCreator"
                />
              </a>
            </div>
            <div className="rounded-lg basis-1/3 flex-1">
              <a
                href="https://github.com/NickTalledo/Bitcoin-Converter"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover border-2 border-teal-600 transition-transform transform hover:scale-105"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={Bitcoin}
                  alt="Bitcoin"
                />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-3xl py-1 dark:text-white ">Experience</h3>
              <Image src={Tools} width={100} height={100} alt="Tools" />
            </div>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex">
                <div className="flex-none w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                  <DiCode className="text-white text-4xl" />
                  <span className="text-white text-2xl"></span>
                </div>
                <div className="flex-1 ml-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    NYC Tech Talent Pipeline
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Software Developer Resident | Jun 2023 - Aug 2023
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    » Resident at the NYC Tech Talent Pipeline, participating in
                    a 10 week full-stack bootcamp focused on acquiring essential
                    technical skills in full-stack software development
                    methodologies
                    <br />» Collaborating on real-world projects, attending
                    industry events, development workshops, and receiving 1:1
                    mentorship to stay up-to-date with the latest trends in the
                    tech field
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-none w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                  <BiLogoGoogle className="text-white text-3xl" />
                  <span className="text-white text-2xl"></span>
                </div>
                <div className="flex-1 ml-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Google
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Google Software Engineering Program (G-SWEP) via
                    ProjectBasta | Feb 2023 - May 2023
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    » Rigorous technical 1:1 mentoring sessions with a Google
                    SWE and workshops designed to enhance technical
                    problem-solving and interview skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-3xl py-1 dark:text-white ">Education</h3>
              <Image src={Notebook} width={100} height={100} alt="Notebook" />
            </div>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex">
                <div className="flex-none w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                  <LiaSchoolSolid className="text-white text-3xl" />
                  <span className="text-white text-2xl"></span>
                </div>
                <div className="flex-1 ml-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    City University of New York, College of Staten Island
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    B.S. in Computer Science | Anctipiated Graduation: May 2024
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    » Pursuing a Bachelor&apos;s Degree in Computer Science from
                    the University of New York <br />» Organizations:
                    Hack-A-Project Club, ColorStack, CSTEP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-3xl py-1 dark:text-white ">Certifications</h3>
              <Image src={File} width={100} height={100} alt="Notebook" />
            </div>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex">
                <div className="flex-none w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                  <SiHackaday className="text-white text-3xl" />
                  <span className="text-white text-2xl"></span>
                </div>
                <div className="flex-1 ml-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    TCM Security
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Ethical Hacking | January 2024 - February 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 pt-8">
              <div className="flex">
                <div className="flex-none w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                  <MdComputer className="text-white text-3xl" />
                  <span className="text-white text-2xl"></span>
                </div>
                <div className="flex-1 ml-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    CodePath
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Web Development | September 2023 - November 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 pt-8">
              <div className="flex">
                <div className="flex-none w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                  <MdOutlineSecurity className="text-white text-3xl" />
                  <span className="text-white text-2xl"></span>
                </div>
                <div className="flex-1 ml-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Coursera
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Google Cybersecurity | July 2023 - November 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 pt-8">
              <div className="flex">
                <div className="flex-none w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                  <CgWebsite className="text-white text-3xl" />
                  <span className="text-white text-2xl"></span>
                </div>
                <div className="flex-1 ml-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Great Learning
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Full Stack Development | July 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 pt-8">
              <div className="flex">
                <div className="flex-none w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                  <DiJavascript1 className="text-white text-3xl" />
                  <span className="text-white text-2xl"></span>
                </div>
                <div className="flex-1 ml-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Free Code Camp
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    JavaScript and Algorithms and Data Structures | January 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {showBackToTop && (
          <button
            className="fixed bottom-4 right-4 p-4 bg-teal-500 text-white rounded-full shadow-lg transition-opacity duration-300 hover:opacity-80"
            onClick={scrollToTop}
          >
            Back to Top
          </button>
        )}
      </main>
      <footer className="bg-teal-500 text-white text-center py-4">
        <p className="text-sm">
          &copy; 2023 Nicolas Talledo. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
