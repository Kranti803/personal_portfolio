"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Movie from '../assets/movie.png'
import Blog from '../assets/blog.png'
import Netflix from '../assets/netflix.png'
import ProjectCard from "./ProjectCard";

import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

export const TypewriterEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["A FullStack Developer"],
        autoStart: true,
        loop: true,
        cursor: "|",
      }}
    />
  );
};


export const CarouselComponent=()=>{
  return(
    <Carousel
        autoPlay={true}
        interval={1500}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        <ProjectCard image={Movie} url={""} />
        <ProjectCard image={Blog} url={""} />
        <ProjectCard image={Netflix} url={""} />
      </Carousel>
  )
}