"use client";
import React from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { navLinks } from "@/app/constant";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[rgb(32,33,36)] z-50 text-white flex h-[45px] items-center justify-between px-4 sm:px-16 sticky top-0 left-0">
      <h2 className=" text-2xl xs:text-3xl font-bold">
        <Link href={"/"}>
          Kk<span className="text-[#CC9544]">.</span>
        </Link>
      </h2>
      <ul className="hidden md:flex gap-8 text-lg">
        {navLinks.map((item) => (
          <li key={item.id} className="hover:text-[#CC9544]">
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <button className=" block md:hidden text-[#81E6D9]">
        <Hamburger toggled={open} toggle={setOpen} hideOutline={true} rounded distance="sm" color="#CC9544">
          HAmburger
        </Hamburger>
      </button>

      {/* navmenu for mobiles...... */}
      <div
        className={
          open
            ? "bg-[#CC9544] absolute h-screen top-0 left-0 w-2/3 px-10 py-2 duration-200 ease-in translate-x-[0%]"
            : "bg-[#CC9544] absolute h-screen top-0 left-0 w-2/3 px-10 py-2 duration-200 ease-in translate-x-[-150%]"
        }
      >
        <h2 className="text-2xl xs:text-3xl font-bold">
          <Link href={"/"}>
            Kk<span className="text-[#ffffff]">.</span>
          </Link>
        </h2>
        <ul className="flex flex-col gap-12 text-lg pt-8">
          {navLinks.map((item) => (
            <li key={item.id} onClick={() => setOpen(false)}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
