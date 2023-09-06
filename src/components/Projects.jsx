import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="mt-8 px-6 md:px-0 lg:w-[80vw] m-auto ">
      <div className="flex gap-2 items-center">
        <span className="text-xl md:text-3xl">Projects</span>
        <p className="h-[1px] bg-[#81E6D9] w-screen"></p>
      </div>
      <ProjectCard/>
    </section>
  );
};

export default Projects;
