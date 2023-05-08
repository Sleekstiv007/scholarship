import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaUniversity,
} from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-[1640px] mx-auto py-12 px-4 grid lg:grid-cols-3 gap-8 text-[#fff] bg-[#00112c]">
      <div>
        <h1 className="w-full text-3xl font-bold  text-[#0abf53]">Michael</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div className="ml-4">
          <h6 className="font-medium text-[#fff]">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#fff]">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div className="mr-4">
          <h6 className="font-medium text-[#fff]">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
      </div>
      <div className="border-t outline-gray-100 flex p-4 md:w-[1296px]"></div>
      <div>
        <ul className="flex items-center gap-2 text-gray-100 text-sm md:flex md:mt-8">
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Disclaimer</li>
          <li className="flex gap-1">
            <MdCopyright className="mt-[3px]" />
            2023 <FaUniversity className="mt-[2px]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
