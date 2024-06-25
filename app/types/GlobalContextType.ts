import { MenuItemType } from "@/app/types/MenuItemType";
import { Dispatch, SetStateAction } from "react";

export type GlobalContextType = {
  menuItemsObject: {
    menuItems: MenuItemType[];
    setMenuItems: Dispatch<SetStateAction<MenuItemType[]>>;
  };
};
