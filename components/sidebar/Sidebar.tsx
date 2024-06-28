import React from "react";
import LogoName from "./LogoName";
import Menu from "./Menu";
import Logout from "./Logout";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="flex-grow p-10 flex flex-col border bg-white min-h-screen">
      <LogoName />
      <Menu />
      <Logout />
    </div>
  );
};

export default Sidebar;
