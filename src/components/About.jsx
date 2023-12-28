import React from "react";
import Image from "next/image";
import Profile from "../assets/profile.webp";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="px-6 lg:w-[80vw] m-auto">
      <div className="flex gap-2 items-center">
        <span className="text-xl md:text-3xl">About</span>
        <p className="h-[1px] bg-[#CC9544] w-screen"></p>
      </div>
      <div className=" mt-4 md:flex md:justify-between text-center">
        <div className=" flex justify-center md:items-center">
          <Image
            src={Profile}
            loading="lazy"
            alt="profile_image"
            className=" h-[220px] xs:h-[300px] md:h-[400px] w-[240px] xs:w-[300px] object-fill rounded-[50%] md:rounded-lg"
          />
        </div>
        <div className="md:w-[calc(100%-300px)] text-center md:text-left md:pl-8">
          <h3 className="text-2xl py-4">A short introduction of mine...</h3>
          <p className="md:text-lg">
            "As a dedicated and self-motivated individual, I am a full-stack
            developer with a passion for creating elegant and efficient
            solutions. I am a student with a strong background in computer
            science and a self-taught developer who is always eager to expand my
            skillset. My technical expertise includes proficiency in various
            programming languages such as JavaScript, C++ as well as experience
            with popular web development frameworks and libraries such as React
            and Node.js and MongoDB as a databse . My experience in both
            front-end and back-end development allows me to create seamless and
            responsive web applications. I am a proactive problem-solver and I
            am always looking for ways to improve and optimize my code. I am
            excited to bring my skills and experience to a professional setting
            and contribute to creating innovative and impactful projects."
          </p>
          <Link
            href={"#"}
            className="flex items-center mt-6 px-8 py-2 w-max m-auto rounded gap-4 text-lg bg-[#CC9544]"
          >
            Resume
            <BsDownload size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
