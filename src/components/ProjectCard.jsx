import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { projects } from "@/app/constant";

const ProjectCard = () => {
  return (
    <aside className="flex flex-wrap justify-center gap-16 mt-4">
      {projects.map((item) => (
        <div className="relative min-h-[300px] w-[500px] rounded-sm group">
          <Image
            src={item.imageSrc}
            className="w-full h-full object-cover rounded-sm"
          />
          <div className=" px-2 md:px-4 flex flex-col justify-evenly items-center text-center text-white absolute rounded-sm bottom-0 bg-[#38B2AC] w-[100%] h-[0%] group-hover:h-[100%]  duration-150 bg-opacity-[.75]">
            <h4 className="text-lg invisible group-hover:visible font-semibold">
              {item.name}
            </h4>
            <p className="invisible group-hover:visible">
              Discover a seamless blogging experience with my web app,
              meticulously crafted using the power of React and Node.js.
            </p>
            <div className="flex gap-12 invisible group-hover:visible">
              <button>
                <Link href={"/"}>
                  <AiOutlineGithub size={30} />
                </Link>
              </button>
              <button>
                <Link href={"/"}>
                  <AiOutlineLink size={30} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default ProjectCard;
