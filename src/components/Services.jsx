import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services" className="mt-8 px-6 lg:w-[80vw] m-auto ">
      <div className="flex gap-2 items-center">
        <span className="text-xl md:text-3xl">Services</span>
        <p className="h-[1px] bg-secondary-color w-screen"></p>
      </div>

      <div className="flex flex-col justify-between sm:gap-12 gap-6 items-center md:flex-row sm:justify-evenly mt-6 ">
        <div className="bg-[#2c2f35cd] bg-opacity-[0.65] shadow-md rounded-sm h-48 w-full  flex flex-col p-8 gap-8">
          <BsGlobe size={50} className="text-secondary-color" />
          <h3 className="text-md sm:text-lg">Web Developement</h3>
        </div>
        <div className="bg-[#2c2f35cd] bg-opacity-[0.65] shadow-md rounded-sm h-48 w-full  flex flex-col p-8 gap-8">
          <AiOutlineMobile size={50} className="text-secondary-color" />
          <h3 className="text-md sm:text-lg">Hybrid App Developement</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
