import React from "react";
import Image from "next/image";

const CustomImage = ({ image, className }) => {
  return (
    <div className={`${className} relative`}>
      <Image src={image} className={`${className}  `}/>
      <div className=" absolute bg-[#81E6D9] h-[100%] w-[100%] top-0 opacity-[.605] hover:opacity-0 duration-150 ease-in"></div>
    </div>
  );
};

export default CustomImage;
