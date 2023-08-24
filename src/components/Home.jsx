import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineSend,
} from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import { BsMouse } from "react-icons/bs";
import { TypewriterEffect } from "./Client";


const Home = () => {
  return (
    <section className="px-6 lg:w-[80vw] m-auto  h-[calc(100vh-40px)] flex justify-evenly flex-col">
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-xl text-[#9d00ff]">Hello!</p>
          <h3 className="text-6xl md:text-8xl">
            I'm <span className="text-[#fff]">Kranti Kumar</span>
          </h3>
        </div>
        <h4 className="text-lg sm:text-3xl flex gap-4">
          I'm
          <span className="text-[#9d00ff]">
            <TypewriterEffect />
          </span>
        </h4>
        <p className="text-lg  text-[#ccd6f6]">
          I have a passion for building intuitive, user-friendly interfaces that
          provide an enjoyable and seamless user experience.
        </p>
        <Link
          href={"#"}
          className="flex items-center mt-6 px-8 py-2 mr-auto rounded gap-1 text-lg bg-[#9d00ff] "
        >
          Contact me
          <AiOutlineSend size={15} />
        </Link>
      </div>
      <div className="flex justify-center lg:justify-between  text-[#fff]">
        <Link
          href={"#about"}
          className="hidden lg:flex items-center animate-bounce text-lg text-[#9d00ff]"
        >
          <BsMouse />
          Scroll Down
          <AiOutlineArrowDown />
        </Link>
        <div className="flex gap-6 sm:gap-14 text-2xl sm:text-3xl">
          <FaFacebookSquare className="hover:scale-[1.1] duration-300 ease-in-out hover:text-[#9d00ff]" />
          <AiOutlineInstagram className="hover:scale-[1.1] duration-300 hover:text-[#9d00ff]" />
          <FaLinkedin className="hover:scale-[1.1] duration-300 hover:text-[#9d00ff]" />
          <AiOutlineGithub className="hover:scale-[1.1] duration-300 hover:text-[#9d00ff]" />
        </div>
      </div>
    </section>
  );
};

export default Home;
