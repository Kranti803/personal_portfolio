import React from "react";
import Image from "next/image";
import { skills } from "@/app/constant";

const Skills = () => {
  return (
    <section id="skills" className=" mt-8 px-6 lg:w-[80vw] m-auto ">
      <div className="flex gap-2 items-center">
        <span className="text-xl md:text-3xl">Skills</span>
        <p className="h-[1px] bg-[#CC9544] w-screen"></p>
      </div>
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-4 pt-6">
        {skills.map((item) => (
          <div key={item.id} className="bg-[#2c2f35cd] bg-opacity-[0.2] rounded-sm hover:text-[#CC9544] min-h-[125px] flex flex-col text-center items-center justify-center shadow-md">
            <Image
              src={item.imageSrc}
              className=" h-[70px] w-[70px] hover:scale-110 ease-in-out duration-200"
              alt="skills_png"
            />
            <span className="">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
