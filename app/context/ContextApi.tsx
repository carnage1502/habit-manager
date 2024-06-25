"use client";
import { ReactNode, createContext, useState, useContext } from "react";

import { GlobalContextType } from "@/app/types/GlobalContextType";
import { MenuItemType } from "@/app/types/MenuItemType";

import {
  faChartSimple,
  faLayerGroup,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";

const GlobalContext = createContext<GlobalContextType>({
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
  },
});

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([
    { name: "Habits", isSelected: true, icon: faRectangleList },
    { name: "Statistics", isSelected: false, icon: faChartSimple },
    { name: "Areas", isSelected: false, icon: faLayerGroup },
  ]);

  return (
    <GlobalContext.Provider
      value={{ menuItemsObject: { menuItems, setMenuItems } }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContextProvider() {
  return useContext(GlobalContext);
}

export default GlobalContextProvider;
