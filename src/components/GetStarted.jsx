import React from "react";

const GetStarted = () => {
  return (
    <div className="max-w-[1640px] mx-auto h-full">
      <div className="bg-[#0abf53] py-16 font-semibold w-full flex flex-col justify-center">
        <p className="font-semibold text-[#fff] text-2xl md:text-2xl text-center p-6">
          Get started with payments
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-[#00112c] text-[#00df9a] font-bold rounded-[8px] p-5 py-4 px-4">
            Talk to our team
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;