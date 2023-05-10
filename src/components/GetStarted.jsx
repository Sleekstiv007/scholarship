import React from "react";

const GetStarted = () => {
  return (
    <div className="max-w-[1640px] mx-auto h-full">
      <div className="bg-[#0abf53] py-16 font-normal font-custom w-full flex flex-col justify-center">
        <p className="font-bold text-[#fff] text-2xl md:text-3xl text-center p-6">
          Get started with Applications
        </p>
        <div className="flex justify-center">
          <button className="bg-[#00112c] text-[#fff] font-bold rounded-[8px] p-5 py-4 px-4">
            Talk to our team
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
