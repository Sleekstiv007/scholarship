import React from "react";
const Hero = () => {
  return (
    <div className="max-w-[1640px] w-full md:h-screen mx-auto px-4 pt-4 flex flex-col gap-8">
      <div className="md:flex md:gap-24 mt-6 md:mt-16">
        <div className="px-2 md:mb-20">
          <h2 className="font-semibold tracking-tightest mb-8 md:mt-20 text-3xl md:text-6xl md:mb-4 md:flex tracking-tighter">
            Engineered for <br />
            ambition
          </h2>
          <p className=" mr-14 lg:text-xl mb-8 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem
            libero voluptatem illum eius. Eos, cum excepturi? Blanditiis unde
            minus enim.
          </p>
        </div>
        <div className="md:w-[700px] md:mr-8">
          <img
            className="md:pt-12"
            src="https://images.unsplash.com/photo-1605299670824-00515e81b924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGNvbGxlZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
