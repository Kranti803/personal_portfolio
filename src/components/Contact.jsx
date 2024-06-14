"use client";
import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { AiFillMail } from "react-icons/ai";
import { toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContact = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("https://kranti-kumar.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success === false) {
      toast.error("Something went wrong !");
    } else {
      toast.success(data.message);
    }
    setLoading(false);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className=" mt-8 pb-4 px-6 lg:w-[80vw] m-auto ">
      <div className="flex gap-2 items-center">
        <span className="text-xl md:text-3xl">Contact</span>
        <p className="h-[1px] bg-[#50C878] w-screen"></p>
      </div>
      <div className="flex justify-evenly flex-wrap">
        <div className="grid gap-8 pt-8 place-items-center">
          <h4 className="flex items-center sm:text-lg gap-2">
            <IoMdCall className="text-[#50C878]" size={25} /> +977 980123244
          </h4>
          <h4 className="flex items-center sm:text-lg gap-2">
            <CiLocationOn className="text-[#50C878]" size={25} />
            Kathmandu, Nepal
          </h4>
          <h4 className="flex items-center sm:text-lg gap-2">
            <AiFillMail className="text-[#50C878]" size={25} />
            Krantikumar803@gmail.com
          </h4>
        </div>
        <div className="mt-6">
          <form onSubmit={handleContact} className="flex flex-col ">
            <div className="flex flex-wrap gap-2 ">
              <input
                onChange={handleInputChange}
                name="name"
                value={formData.name}
                type="text"
                placeholder="Name"
                className="bg-[#2c2f35cd] bg-opacity-[0.65] shadow-lg rounded-sm w-full sm:w-auto p-2 text-white outline-none"
                required
              />
              <input
                onChange={handleInputChange}
                name="email"
                value={formData.email}
                type="email"
                placeholder="Email"
                className=" bg-[#2c2f35cd] bg-opacity-[0.65] shadow-lg rounded-sm w-full sm:w-auto p-2 text-white outline-none"
                required
              />
            </div>
            <input
              onChange={handleInputChange}
              name="subject"
              value={formData.subject}
              type="text"
              placeholder="Subject"
              className=" bg-[#2c2f35cd] bg-opacity-[0.65] shadow-lg rounded-sm p-2 mt-2 text-white outline-none"
              required
            />
            <textarea
              onChange={handleInputChange}
              name="message"
              value={formData.message}
              rows={10}
              placeholder="Message"
              className="bg-[#2c2f35cd] bg-opacity-[0.65] shadow-lg rounded-sm resize-none mt-2 p-4 text-white outline-none"
              required
            />
            <button
              type="submit"
              className="shadow-lg rounded-sm mt-2 bg-secondary-color py-2"
              disabled={loading ? true : false}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
