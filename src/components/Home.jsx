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
    <section className="px-6 lg:w-[80vw] m-auto  min-h-[calc(100vh-40px)] flex justify-evenly flex-col">
      <div className="flex flex-col gap-4 xs:gap-8">
        <div>
          <p className="text-xl text-[#81E6D9]">Hello!</p>
          <h3 className="text-6xl md:text-8xl">
            I'm <span className="text-[#fff]">Kranti Kumar</span>
          </h3>
        </div>
        <h4 className="text-sm xs:text-2xl md:text-3xl flex gap-2">
          I'm
          <span className="text-[#81E6D9]">
            <TypewriterEffect />
          </span>
        </h4>
        <p className="text-lg  text-[#ccd6f6]">
          I have a passion for building intuitive, user-friendly interfaces that
          provide an enjoyable and seamless user experience.
        </p>
        <Link
          href={"mailto:krantikumar803@gmail.com"}
          className="flex items-center mt-6 px-8 py-2 mr-auto rounded gap-1
          text-lg bg-[#38B2AC]"
        >
          {" "}
          Contact me
          <AiOutlineSend size={15} />
        </Link>
      </div>
      <div className="flex justify-center lg:justify-between  text-[#fff]">
        <Link
          href={"#about"}
          className="hidden lg:flex items-center animate-bounce text-lg text-[#81E6D9]"
        >
          <BsMouse />
          Scroll Down
          <AiOutlineArrowDown />
        </Link>
        <div className="flex gap-8 xs:gap-12 md:gap-14 text-2xl xs:text-3xl">
          <Link
            href={"https://www.facebook.com/profile.php?id=100009548415723"}
          >
            <FaFacebookSquare className="hover:scale-[1.1] duration-300 ease-in-out hover:text-[#81E6D9]" />
          </Link>
          <AiOutlineInstagram className="hover:scale-[1.1] duration-300 hover:text-[#81E6D9]" />
          <FaLinkedin className="hover:scale-[1.1] duration-300 hover:text-[#81E6D9]" />
          <Link href={"https://github.com/Kranti803"}>
            <AiOutlineGithub className="hover:scale-[1.1] duration-300 hover:text-[#81E6D9]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
