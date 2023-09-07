import React from "react";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className=" mt-8 px-6 lg:w-[80vw] m-auto ">
      <div className="flex gap-2 items-center">
        <span className="text-xl md:text-3xl">Contact</span>
        <p className="h-[1px] bg-[#81E6D9] w-screen"></p>
      </div>
      <div className="flex justify-evenly flex-wrap">
        <div className="grid gap-8 pt-8 place-items-center">
          <h4 className="flex items-center sm:text-lg gap-2">
            <IoMdCall className="text-[#81E6D9]" size={25} /> +977 980123244
          </h4>
          <h4 className="flex items-center sm:text-lg gap-2">
            <CiLocationOn className="text-[#81E6D9]" size={25} />
            Kathmandu, Nepal
          </h4>
          <h4 className="flex items-center sm:text-lg gap-2">
            <AiFillMail className="text-[#81E6D9]" size={25} />
            Krantikumar803@gmail.com
          </h4>
        </div>
        <div className="mt-6">
          <form action="" className="flex flex-col ">
            <div className="flex flex-wrap gap-2 ">
              <input
                type="text"
                placeholder="Name"
                className=" bg-slate-700 bg-opacity-[0.65] shadow-lg rounded-sm w-full sm:w-auto p-2 bg-inherit text-white outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className=" bg-slate-700 bg-opacity-[0.65] shadow-lg rounded-sm w-full sm:w-auto p-2 bg-inherit text-white outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className=" bg-slate-700 bg-opacity-[0.65] shadow-lg rounded-sm p-2 mt-2 bg-inherit text-white outline-none"
            />
            <textarea
              rows={10}
              placeholder="Message"
              className=" bg-slate-700 bg-opacity-[0.65] shadow-lg rounded-sm resize-none mt-2 p-4 bg-inherit text-white outline-none"
            ></textarea>
            <button className="shadow-lg rounded-sm mt-2 bg-[#38B2AC] py-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
