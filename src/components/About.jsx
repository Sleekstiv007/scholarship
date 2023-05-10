import React from "react";
import CardList from "./BlogsList";



const About = () => {
  return (
    <div className="max-w-[1640px] mx-auto py-12 px-4">
      <div>
        <h2 className="text-2xl block font-medium p-3 text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi culpa
          sequinulla nesciunt.
        </h2>

        <CardList/>
      </div>
    </div>
  );
};

export default About;
