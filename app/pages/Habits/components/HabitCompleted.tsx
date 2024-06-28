import React from "react";
import HabitCard from "./HabitCard";

const HabitCompleted = () => {
  return (
    <div className="bg-white mt-7 p-8 rounded-md">
      <span className="font-bold text-lg mb-2">Habits Completed</span>
      <div className="mt-4 opacity-50">
        <HabitCard />
        <HabitCard />
      </div>
    </div>
  );
};

export default HabitCompleted;
