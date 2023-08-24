'use client'
import React from 'react'
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { navLinks } from '@/app/constant';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0a192f] text-white flex h-[40px] items-center justify-between px-4 sm:px-16 sticky top-0 left-0">
      <h2 className=" text-2xl xs:text-3xl font-bold">
        <Link href={"/login"}>PorTFoliO</Link>
      </h2>
      <ul className="hidden md:flex gap-8 text-lg">
        {navLinks.map((item) => (
          <li key={item.id} className="hover:text-[#9d00ff]">
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <button className=" block md:hidden">
        <Hamburger toggled={open} toggle={setOpen}>
          HAmburger
        </Hamburger>
      </button>

      {/* navmenu for mobiles...... */}
      <div
        className={
          open
            ? "bg-[#9d00ff] absolute h-screen top-0 left-0 w-1/2 px-10 py-2 duration-200 ease-in translate-x-[0%]"
            : "bg-[#9d00ff] absolute h-screen top-0 left-0 w-1/2 px-10 py-2 duration-200 ease-in translate-x-[-100%]"
        }
      >
        <h2 className="text-2xl xs:text-3xl font-bold">
          <Link href={"/login"}>PorTFoliO</Link>
        </h2>
        <ul className="flex flex-col gap-12 text-lg pt-8">
          {navLinks.map((item) => (
            <li key={item.id} onClick={()=>setOpen(false)}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;