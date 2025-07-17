"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import '../css/HeroSection.css';
import '../css/skill.css';


import HtmlIcon from "../../../public/html-icon.png";
import CssIcon from "../../../public/css-icon.png";
import JavascriptIcon from "../../../public/javascript-icon.png";
import TypescriptIcon from "../../../public/typescript10.svg";
import TailwindIcon from "../../../public/tailwind-icon.png";
import NextjsIcon from "../../../public/nextjs-icon.svg";
import ReactIcon from "../../../public/react-icon.png";
import D3Icon from "../../../public/d3-icon.svg";
import phpIcon from "../../../public/php-icon.svg";
import MySQLIcon from "../../../public/mysql-icon.svg";
import AdobexdIcon from "../../../public/adobexd-icon.svg";
import RIcon from "../../../public/r-icon.svg";
import RubyIcon from "../../../public/ruby-icon.svg";
import SPSSIcon from "../../../public/spss-icon.svg";
import PythonIcon from "../../../public/python-icon.svg";
import CIcon from "../../../public/c-icon.svg";
import CsharpIcon from "../../../public/csharp-icon.svg";
import AngularIcon from "../../../public/angular.svg";
import PostmanIcon from "../../../public/postman.svg";
import FigmaIcon from "../../../public/figma.svg";
import SwaggerIcon from "../../../public/swagger.svg";


const TAB_DATA = [
  {
    title: "Web Skills",
    id: "webskills",
    content: (
      <div class="flex flex-wrap justify-center space-x-4">
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={HtmlIcon} alt="HTML Icon" />
            <p class="font-abc small">HTML 5</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={CssIcon} alt="CSS Icon" />
            <p class="font-abc small">CSS</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={JavascriptIcon} alt="Javascript Icon" />
            <p class="font-abc small">Javascript</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={AngularIcon} alt="Angular Icon" />
            <p class="font-abc small">Angular</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={TypescriptIcon} alt="Typescript Icon" />
            <p class="font-abc small">TypeScipt</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={TailwindIcon} alt="Tailwind Icon" />
            <p class="font-abc small">Tailwind</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[50px] w-[50px] mt-[10px]" src={NextjsIcon} alt="Next.js Icon" />
            <p class="font-abc small">Next.js</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={ReactIcon} alt="React Icon" />
            <p class="font-abc small">React</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[55px]" src={D3Icon} alt="D3 Icon" />
            <p class="font-abc small">D3.js</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[55px]" src={phpIcon} alt="php Icon" />
            <p class="font-abc small">PHP</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[55px]" src={MySQLIcon} alt="MySQL Icon" />
            <p class="font-abc small">MySQL</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[55px]" src={AdobexdIcon} alt="AdobeXD Icon" />
            <p class="font-abc small">Adobe XD</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[55px]" src={FigmaIcon} alt="Figma Icon" />
            <p class="font-abc small">Figma</p>
        </div>
    </div>
    ),
  },
  {
    title: "Other Techs",
    id: "othertechs",
    content: (
      <div class="flex flex-wrap justify-center space-x-4">
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={RIcon} alt="R Icon" />
            <p class="text-center font-abc small">R Language</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={RubyIcon} alt="Ruby Icon" />
            <p class="font-abc small">Ruby</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={SPSSIcon} alt="IBM Icon" />
            <p class="text-center font-abc small">SPSS Statistics</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={PythonIcon} alt="Python Icon" />
            <p class="font-abc small">Python</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={CIcon} alt="C Icon" />
            <p class="font-abc small">C++</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={CsharpIcon} alt="C #" />
            <p class="font-abc small">C Sharp</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[55px]" src={PostmanIcon} alt="Postman Icon" />
            <p class="font-abc small">Postman</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[55px]" src={SwaggerIcon} alt="Swagger Icon" />
            <p class="font-abc small">Swagger</p>
        </div>
        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 w-1/6 pb-10">
            <Image class="h-[60px] w-[60px]" src={SPSSIcon} alt="IBM Icon" />
            <p class="text-center font-abc small">Mainframe Technologies</p>
        </div>
    </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col justify-between w-full">
          <p className="font-abc text-xs text-gray-400">
            Aug. 2019 – July. 2023
          </p>
          <p className="font-abc font-bold text-base">
            Bachelor of Computer Science
          </p>
          <p className="font-abc text-sm text-gray-400 font-bold">
            Swinburne University Technology, Melbourne Australia
          </p>
          
          <div className="w-full pt-2">
            <a href="/Testamur Swinburne Khoa Pham.pdf" download="Testamur Swinburne Khoa Pham.pdf" className="w-full transition duration-300 ease-in-out rounded-full text-black inline-block">
              <span className="font-abc bg-white hover:bg-slate-200 font-bold rounded-full px-3 py-1 text-xs md:text-sm lg:text-base block text-center">
                Download Testamur
              </span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col justify-between w-full">
          <p className="font-abc text-xs text-gray-400">
            March. 2019 – Jun. 2019
          </p>
          <p className="font-abc font-bold text-base">
          Bachelor of Engineering (Honours)
          </p>
          <p className="font-abc text-sm text-gray-400 font-bold">
          Swinburne University Technology, Melbourne Australia 
          </p>
        </div>

        <div className="flex flex-col justify-between w-full">
          <p className="font-abc text-xs text-gray-400">
            Feb. 2013 – Nov. 2018
          </p>
          <p className="font-abc font-bold text-base">
          SACE(South Australia Certificate of Education)
          </p>
          <p className="font-abc text-sm text-gray-400 font-bold">
          Norwood Morialta High School 
          </p>
        </div>
      </div>

      


    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("webskills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <span class="-mt-200 text-black"  id="about" alt="aboutsection">.</span>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image class="object-scale-down [h-684px] w-[467px]" src="/images/about-image.jpg" width={3734} height={5468} alt="Side Photo" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="font-abc text-color-transition text-2xl font-black text-white mb-4">About Me</h2>
          <h3 className="font-abc text-4xl font-bold text-white mb-4">A dedicated Front-end Developer based in Australia 📍</h3>
          <p className="font-abc text-base">
          As a Junior Front-End Developer and Full-Stack Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Next, Tailwind, D3, PHP and SQL. 
          I excel in designing and maintaining responsive websites that offer a smooth user experience. My experience lies in crafting dynamic, engaging interfaces though writing clean and optimized code and utilizing cutting-edge development tools and techniques. 
          I am also a team player who thrives in collaboration with cross-functional teams to produce outstanding web applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton 
              selectTab={() => handleTabChange("webskills")}
              active={tab === "webskills"}
            >
              {" "}
              Web Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("othertechs")}
              active={tab === "othertechs"}
            >
              {" "}
              Other Software&apos;s Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
