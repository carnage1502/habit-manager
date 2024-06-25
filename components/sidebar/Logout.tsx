import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  const logoutObj = { name: "Log Out", icon: faRightFromBracket };
  return (
    <div className="flex gap-2 items-center ml-8 p-2 mt-28 hover:text-blue-500 transition-all cursor-pointer">
      <FontAwesomeIcon width={20} height={20} icon={logoutObj.icon} />
      <div onClick={() => signOut()}>{logoutObj.name}</div>
    </div>
  );
};

export default Logout;
