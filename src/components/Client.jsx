"use client";
import React from "react";
import Typewriter from "typewriter-effect";

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
