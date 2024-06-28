import React from "react";
import HabitSearchbar from "./HabitSearchbar";
import DarkMode from "@/components/DarkMode";

const HabitTopbar = () => {
  return (
    <div className="bg-white p-5 rounded-md flex justify-between">
      <div className="flex flex-col">
        <span className="text-xl">
          <span className="font-bold">Hi,</span>
          <span className="font-light"> Carnage</span>
        </span>
        <span className="font-light text-[12px] text-gray-400">
          Welcome back!
        </span>
      </div>
      <div className="w-[50%] flex gap-3 justify-between">
        <HabitSearchbar />
        <DarkMode />
      </div>
    </div>
  );
};

export default HabitTopbar;
