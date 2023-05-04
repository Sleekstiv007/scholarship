import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { MdOutlineHomeRepairService, MdContacts } from "react-icons/md";
import { FcAbout, FcInfo } from "react-icons/fc";
import { FaUniversity } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
      <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
        <AiOutlineMenu size={30} />
      </div>
      <div className="hidden md:flex items-center md:items-center bg-gray-200 rounded-full p-1 text-[14px]"></div>
      <div className="mx-0">
        <FaUniversity size={40} className="text-[#0abf53] mr-[10px] md:mr-60" />
      </div>
      <ul className=" hidden md:flex items-center md:items-center md:mr-[800px] tracking-wide">
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
        <div className="bg-black/50 fixed w-full h-screen z-10 left-0 top-0"></div>
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
          size={30}
          className="absolute right-4 top-4 cursor-pointer "
        />
        <h2 className="text-2xl font-bold text-[#0abf53] p-4">
          <FaUniversity size={40} />
        </h2>
        <nav className="mt-10">
          <ul>
            <li className=" text-xl gap-4 flex py-4 ">
              <AiOutlineHome size={30} className="ml-4 " />
              Home
            </li>
            <li className="text-xl gap-4 flex py-4">
              <MdOutlineHomeRepairService size={30} className="ml-4" />
              Services
            </li>
            <li className="text-xl gap-4 flex py-4">
              <MdContacts size={30} className="ml-4" />
              Contact
            </li>
            <li className="text-xl gap-4  flex py-4">
              <FcAbout size={35} className="ml-4" />
              About
            </li>
            <li className="text-xl gap-4  flex py-4">
              <FcInfo size={35} className="ml-4" />
              Resources
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
