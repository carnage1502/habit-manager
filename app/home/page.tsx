"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import { signOut } from "next-auth/react";
import { useGlobalContextProvider } from "../context/ContextApi";
import { useEffect, useState } from "react";
import { MenuItemType } from "../types/MenuItemType";
import Habits from "../pages/Habits/Habits";
import Statistics from "../pages/Statistics/Statistics";
import Areas from "../pages/Areas/Areas";

const Home = () => {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  const [selectedMenu, setSelectedMenu] = useState<MenuItemType | null>(null);
  let selectComponent = null;

  useEffect(() => {
    menuItems.map((singleItem) => {
      if (singleItem.isSelected) {
        setSelectedMenu(singleItem);
      }
    });
  }, [menuItems]);

  switch (selectedMenu?.name) {
    case "Habits":
      selectComponent = <Habits />;
      break;
    case "Statistics":
      selectComponent = <Statistics />;
      break;
    case "Areas":
      selectComponent = <Areas />;
      break;
    case "All Areas":
      break;
  }

  return (
    <div className="flex">
      <Sidebar />
      {selectComponent}
    </div>
  );
};

export default Home;
