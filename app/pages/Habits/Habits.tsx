import React from "react";
import HabitTopbar from "./components/HabitTopbar";
import RightSidebar from "./components/RightSidebar";
import HabitContainer from "./HabitContainer";
import HabitCompleted from "./components/HabitCompleted";

const Habits = () => {
  return (
    <div className="w-full flex bg-gray-100">
      <div className="w-[80%] m-5">
        <HabitTopbar />
        <HabitContainer />
        <HabitCompleted />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Habits;
