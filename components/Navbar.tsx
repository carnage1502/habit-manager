import React from "react";
import AppIcon from "./AppIcon";
import Link from "next/link";
import LogoName from "./sidebar/LogoName";

const Navbar = () => {
  const defColor = "#387ADF";
  const bgColorObj = { backgroundColor: defColor };
  return (
    <header>
      <div className="p-8 px-20">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left mb-7 sm:mb-0">
            {/* icon+app name */}
            <LogoName />
          </div>
          {/* signin buttons */}
          <nav className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link
              href={"/login"}
              style={bgColorObj}
              className={`block sm:w-32 w-full rounded-lg px-9 py-3 text-sm font-medium text-white transition focus:outline-none text-center`}
              type="button"
            >
              Sign In
            </Link>
            <Link
              href={"/register"}
              className={`block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm font-medium transition focus:outline-none hover:bg-blue-600 hover:text-white border-blue-600 text-blue-600 text-center`}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
