import HabitContainerMiddle from "./components/HabitContainerMiddle";
import HabitContainerTop from "./components/HabitContainerTop";

const HabitContainer = () => {
  return (
    <div className="mt-5 bg-white rounded-md p-5 flex flex-col gap-3">
      <HabitContainerTop />
      <HabitContainerMiddle />
    </div>
  );
};

export default HabitContainer;
