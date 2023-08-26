import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services" className="mt-8 px-6  lg:w-[80vw] m-auto ">
      <div className="flex gap-2 items-center">
        <span className="text-xl md:text-3xl">Services</span>
        <p className="h-[1px] bg-[#9d00ff] w-screen"></p>
      </div>
      <div className="sm:px-12 flex flex-col justify-center sm:gap-12 gap-6 items-center md:flex-row sm:justify-evenly mt-6">
        <div className=" border-2 border-[#9d00ff] rounded-md h-48 w-full   flex flex-col p-8 gap-8">
          <BsGlobe size={50} className="text-[#9d00ff]" />
          <h3 className="text-md sm:text-lg">Web Developement</h3>
        </div>
        <div className="border-2 border-[#9d00ff] rounded-md h-48 w-full  flex flex-col p-8 gap-8">
          <AiOutlineMobile size={50} className="text-[#9d00ff]" />
          <h3 className="text-md sm:text-lg">Hybrid App Developement</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
