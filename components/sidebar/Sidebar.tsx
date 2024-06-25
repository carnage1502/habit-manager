import React from "react";
import LogoName from "./LogoName";
import Menu from "./Menu";
import Logout from "./Logout";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="border-r-2 h-screen p-10">
      <LogoName />
      <Menu />
      <Logout />
    </div>
  );
};

export default Sidebar;
