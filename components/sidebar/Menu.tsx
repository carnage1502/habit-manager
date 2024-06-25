import { useGlobalContextProvider } from "@/app/context/ContextApi";
import { MenuItemType } from "@/app/types/MenuItemType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  return (
    <div className="mt-[180px]">
      {menuItems.map((menuItem: MenuItemType, menuItemIndex: number) => (
        <div key={menuItemIndex}>
          <SingleMenuItem menuItemProp={menuItem} />
        </div>
      ))}
    </div>
  );
};

const SingleMenuItem = ({ menuItemProp }: { menuItemProp: MenuItemType }) => {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems, setMenuItems } = menuItemsObject;

  const handleClickedItem = () => {
    const copyMenuItems = menuItems.map((menuItem) => {
      if (menuItemProp.name === menuItem.name) {
        return { ...menuItem, isSelected: true };
      }

      return { ...menuItem, isSelected: false };
    });
    setMenuItems(copyMenuItems);
  };

  return (
    <div
      className={`flex gap-2 items-center p-2 mb-3 ml-8 cursor-pointer rounded-md w-36
      ${
        menuItemProp.isSelected
          ? "bg-blue-500 transition-all text-white"
          : "hover:text-blue-500"
      }`}
      onClick={handleClickedItem}
    >
      <FontAwesomeIcon
        className=""
        icon={menuItemProp.icon}
        width={20}
        height={20}
      />
      <div>{menuItemProp.name}</div>
    </div>
  );
};

export default Menu;
