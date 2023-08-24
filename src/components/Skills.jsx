import React from "react";
import Image from "next/image";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/js.png";
import REACT from "../assets/react.png";
import NODE from "../assets/node.png";
import MONGODB from "../assets/mongodb.png";
import EXPRESS from "../assets/express.png";
import REDUX from "../assets/redux.png";
import TAILWIND from "../assets/tailwind.png";
import GIT from "../assets/git.png";
import GITHUB from "../assets/github.png";
import SASS from "../assets/sass.png";
import FIREBASE from "../assets/firebase.png";
import CPP from "../assets/c++.png";

const Skills = () => {
  return (
    <section id="skills" className=" mt-8 px-6 lg:w-[80vw] m-auto ">
      <div className="flex gap-2 items-center">
        <span className="text-xl md:text-3xl">Skills</span>
        <p className="h-[1px] bg-[#9d00ff] w-screen"></p>
      </div>
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-4 pt-6">
        <div className=" hover:text-[#9d00ff] min-h-[125px] flex flex-col text-center items-center">
          <Image
            src={HTML}
            className=" h-[70px] w-[70px] hover:scale-110 ease-in-out duration-300"
          />
          <span className="">HTML</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px]  flex flex-col text-center items-center">
          <Image
            src={CSS}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>Css</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px]   flex flex-col text-center items-center">
          <Image
            src={JS}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>Javascript</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px]  flex flex-col text-center items-center">
          <Image
            src={REACT}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>React Js</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px]   flex flex-col text-center items-center">
          <Image
            src={NODE}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>Node JS</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px]   flex flex-col text-center items-center">
          <Image
            src={EXPRESS}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>Express Js</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px] flex flex-col text-center items-center">
          <Image
            src={MONGODB}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>MongoDB</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px] flex flex-col text-center items-center">
          <Image
            src={REDUX}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>Redux</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px] flex flex-col text-center items-center">
          <Image
            src={TAILWIND}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>Tailwind Css</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px] flex flex-col text-center items-center">
          <Image
            src={SASS}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>SASS</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px] flex flex-col text-center items-center">
          <Image
            src={FIREBASE}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>FIREBASE</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px] flex flex-col text-center items-center">
          <Image
            src={GIT}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>Git</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px] flex flex-col text-center items-center">
          <Image
            src={GITHUB}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>Github</span>
        </div>
        <div className="hover:text-[#9d00ff] min-h-[125px] flex flex-col text-center items-center">
          <Image
            src={CPP}
            className=" h-[70px] w-[70px]  hover:scale-110 ease-in-out duration-300"
          />
          <span>C++</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
