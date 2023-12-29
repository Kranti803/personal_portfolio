import React from "react";
import { projects } from "@/app/constant";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  return (
    <section id="projects" className="mt-8 px-6 lg:w-[80vw] m-auto ">
      <div className="flex gap-2 items-center mb-4">
        <span className="text-xl md:text-3xl">Projects</span>
        <p className="h-[1px] bg-secondary-color w-screen"></p>
      </div>
      {projects.map((item) => (
        <div
          key={item.id}
          className="flex even:flex-row-reverse gap-8 mb-12 min-h-[300px]"
        >
          <div className="w-[100%] md:w-[40%] rounded-sm relative group">
            <Image
              src={item.imageSrc}
              className=" w-full h-full object-cover rounded-sm grayscale-0 hover:grayscale"
              alt="projects_image"
            />

            <div className=" px-2 md:px-4 flex md:hidden flex-col justify-evenly items-center text-center text-white absolute rounded-sm bottom-0 bg-secondary-color w-[100%] h-[0%] group-hover:h-[100%]  duration-100 bg-opacity-[.75]">
              <h4 className="text-lg invisible group-hover:visible font-semibold">
                {item.name}
              </h4>
              <p className="invisible hidden sm:block group-hover:visible">
                {item.description}
              </p>
              <p className="invisible group-hover:visible flex flex-wrap gap-4">
                TechStack :
                {item.techStack.map((elem, index) => (
                  <span key={index}>{elem}</span>
                ))}
              </p>
              <div className="flex gap-12 invisible group-hover:visible">
                <button>
                  <Link href={item?.githubLink} target="_blank">
                    <AiOutlineGithub size={30} />
                  </Link>
                </button>
                <button>
                  <Link href={item?.demoLink} target="_blank">
                    <AiOutlineLink size={30} />
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 hidden md:flex flex-col w-[60%] justify-evenly">
            <h2 className="text-secondary-color md:text-2xl">{item.name}</h2>
            <p>{item.description}</p>
            <div className="flex items-center gap-2 text-sm">
              TechStack :
              {item.techStack.map((elem, index) => (
                <span
                  key={index}
                  className="p-1 rounded-sm text-secondary-color"
                >
                  {elem}
                </span>
              ))}
            </div>
            <div className="flex gap-12">
              <button>
                <Link href={item?.githubLink} target="_blank">
                  <AiOutlineGithub size={25} color="#CC9544" />
                </Link>
              </button>
              <button>
                <Link href={item?.demoLink} target="_blank">
                  <AiOutlineLink size={25} color="#CC9544" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
