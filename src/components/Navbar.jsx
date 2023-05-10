import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex flex-row-reverse justify-between items-center p-4 ">
      <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
        <AiOutlineMenu size={25} />
      </div>
      <div className="hidden md:flex items-center md:items-center bg-gray-200 rounded-full p-1 text-[10px]"></div>
      <h1 className="text-[#0abf53] font-semibold text-2xl ml-2">Michael</h1>
      <ul className=" hidden md:flex items-center md:items-center md:mr-[700px] tracking-wide">
        <li className="px-4">Home</li>
        <li className="px-4">Services</li>
        <li className="px-4">Contact</li>
        <li className="px-4">About</li>
        <li className="px-4">Resources</li>
      </ul>
      {/* <div className="flex gap-4 md:mr-[80px]">
        <button className="bg-[#fff] text-[#00df9a] hover:bg-[#00df9a] hover:text-[#000] py-[6px] px-2  border-[#000] font-normal rounded-lg md:px-12 md:py-3 ">
          Log in
        </button>
        <button className="bg-[#0abf53] py-[6px] px-2 font-normal rounded-lg md:px-12 md:py-3">
          Sign in
        </button>
      </div> */}

      {/* overlay */}
      {nav ? (
        <div className="bg-black/50 fixed w-full h-screen z-10 right-0 top-0"></div>
      ) : (
        ""
      )}
      {/* side drawer */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-[#fff] z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-[#fff] z-10 duration-300 "
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer "
        />
        <h2 className="text-2xl font-semibold text-[#0abf53] p-4">Michael</h2>
        <nav className="mt-10">
          <ul>
            <li className=" text-l gap-4 flex py-4 ml-4 ">Home</li>
            <li className="text-l gap-4 flex py-4 ml-4">Services</li>
            <li className="text-l gap-4 flex py-4 ml-4">Contact</li>
            <li className="text-l gap-4  flex py-4 ml-4">About</li>
            <li className="text-l gap-4  flex py-4 ml-4">Resources</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
