import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 ">
      <div className="flex flex-col items-center md:flex-row gap-8 text-sm ">
        <article className="bg-slate-50 p-12 md:m-3 rounded-lg hover:scale-105 duration-300 shadow-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia
          facilis sunt exercitationem reiciendis repudiandae recusandae,
          doloremque consectetur aliquid saepe numquam. Ab dicta obcaecati,
          similique quas, recusandae alias .
        </article>
        <article className="bg-slate-50 p-12 md:m-3 rounded-lg hover:scale-105 duration-300 shadow-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat porro
          sed dignissimos. Blanditiis, commodi tempore ullam aperiam quisquam
          possimus pariatur impedit rerum mollitia officia a natus neque
          veritatis hic eum?
        </article>
        <article className="bg-slate-50 p-12 md:m-3 rounded-lg hover:scale-105 duration-300 shadow-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          iure ut vel quam quasi! Nostrum modi porro consequatur ex itaque id
          maxime excepturi, natus in ipsam minima voluptate expedita debitis
          libero incidunt repellat necessitatibus est?
        </article>
      </div>
      <div className="flex justify-center mt-4">
        <button className="py-[10px] px-[15px] bg-[#00df9a] rounded-md">
          View All
        </button>
      </div>
    </div>
  );
};

export default Blogs;
