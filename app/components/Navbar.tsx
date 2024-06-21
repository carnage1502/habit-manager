import React from "react";
import AppIcon from "./AppIcon";

const Navbar = () => {
  const defColor = "#387ADF";
  const bgColorObj = { backgroundColor: defColor };
  return (
    <header>
      <div className="p-8 px-20">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left mb-7 sm:mb-0">
            {/* icon+app name */}
            <div className="flex gap-2 items-center sm:justify-start justify-center">
              <span className="text-2xl font-light flex items-center gap-2">
                {/* icon */}
                <div style={bgColorObj} className="p-2 rounded-md">
                  <AppIcon color="#ffffff" height="34" width="34" />
                </div>
                {/* app name */}
                <span
                  style={{ color: "#387ADF" }}
                  className="font-bold text-blue-500"
                >
                  Daily
                </span>
                <span className="font-light">Dash</span>
              </span>
            </div>
          </div>
          {/* signin buttons */}
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              style={bgColorObj}
              className={`block sm:w-32 w-full rounded-lg px-9 py-3 text-sm font-medium text-white transition focus:outline-none`}
              type="button"
            >
              Sign In
            </button>
            <button
              className={`block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm font-medium transition focus:outline-none hover:bg-blue-600 hover:text-white border-blue-600 text-blue-600`}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
