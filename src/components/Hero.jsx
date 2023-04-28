import React from "react";
const Hero = () => {
  return (
    <div className="max-w-[1640px] w-full md:h-screen mx-auto px-4 pt-4 flex flex-col gap-8">
      <div className="md:flex md:gap-24 mt-24">
        <p className="text-center flex items-center mb-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem
          libero voluptatem illum eius. Eos, cum excepturi? Blanditiis unde
          minus quaerat harum labore perferendis tempore cupiditate aliquid enim
          voluptas delectus dolor rem nostrum quae, sed facilis numquam amet
          ullam reiciendis mollitia asperiores nobis velit. Fugiat ea veniam
          totam in est.
        </p>
        <div className="md:w-[2500px]">
          <img
            className=""
            src="https://media.istockphoto.com/id/980106570/photo/group-of-graduates-celebrating-and-making-selfie.jpg?s=612x612&w=0&k=20&c=k-X9CCtX3WnXV9XgZCTeHZ6n6sBq0xPzWE9-Wwo5kM0="
            alt="/"
          />
        </div>

        {/* <div className="bg-red-500 w-full h-[100%] pt-4 px-8 ml-5 md:w-[50%] md:h-[64%] md:ml-14 ">
          <img
            className="bg-blue-500 md:px-8 md:py-0 h-[60%] w-fit rounded-lg md:w-[140%] md:[h-700px] object-contain"
            src="https://media.istockphoto.com/id/980106570/photo/group-of-graduates-celebrating-and-making-selfie.jpg?s=612x612&w=0&k=20&c=k-X9CCtX3WnXV9XgZCTeHZ6n6sBq0xPzWE9-Wwo5kM0="
            alt="/"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
