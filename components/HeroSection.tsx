import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col mx-16 items-center mt-[100px] gap-6">
      <span className="font-bold text-3xl text-center">
        Small daily <span className="text-[#387ADF]">habits</span> lead to big
        life changes.
      </span>
      <p className="text-center text-sm sm:w-[430px] w-[370px]">
        Start your day right with Daily Dash, your personal habit tracker
        designed to turn routines into remarkable achievements.
      </p>

      <button
        className={`block text-sm font-light rounded-lg px-9 py-3 text-white transition bg-blue-600 focus:outline-none`}
        type="button"
      >
        Let&apos;s get started!
      </button>
    </div>
  );
};

export default HeroSection;
