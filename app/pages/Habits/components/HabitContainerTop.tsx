import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const HabitContainerTop = () => {
  return (
    <div className="p-3 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div>
          <h2 className="font-bold text-lg">Sunday</h2>
          <span className="font-light text-[12px]">1 May 2024</span>
        </div>
        <div className="flex gap-2 ml-4">
          <div className="text-blue-500 cursor-pointer">
            <BsArrowLeftCircle size={20} />
          </div>
          <div className="text-blue-500 cursor-pointer">
            <BsArrowRightCircle size={20} />
          </div>
        </div>
      </div>

      <button className="flex gap-2 items-center bg-blue-500 p-3 text-white rounded-md text-sm">
        <FontAwesomeIcon icon={faPlus} />
        <span>New Habit</span>
      </button>
    </div>
  );
};

export default HabitContainerTop;
